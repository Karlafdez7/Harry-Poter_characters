
import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import { Routes, Route} from 'react-router-dom';
import CharacterDetail from './CharacterDetail'
import NotFound from "./NotFound";


function App() {
  /* VARIABLES ESTADO (DATOS) */
const [dataApi, setDataApi]= useState([])
const [filterName, setFilterName] = useState ("")
const [filterHouse, setFilterHouse] = useState("Gryffindor")
const [filterGender, setFilterGender] =useState ('all')
const [errorMsg, setErrorMsg] =useState (false);
 
  useEffect(() => {

    callToApi(filterHouse).then((selectionApi) => {
      setDataApi(selectionApi);
    });
  }, [filterHouse]);

  const handleNameFilter = (value) => {
    setFilterName(value)
    setErrorMsg('')
    if (characterListFiltered.length === 0 && !errorMsg){
     setErrorMsg(true)
     }else if (characterListFiltered.length ===0 && errorMsg) {
      setErrorMsg(false)
    }

  }



  const handleHouseFilter = (value) => {
    setFilterHouse(value);
  }

  const handleGenderFilter = (value) => {
    setFilterGender(value)
  }

  const handleOnsubmit = (ev) => {
    ev.preventDefault();
  }
   const handleResetAll = () => {
    setFilterGender('all')
    setFilterName('')
    setFilterHouse('Gryffindor')
    setErrorMsg('')
  }

  const characterListFiltered = dataApi.filter((eachCharacter) => {
    return eachCharacter.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase());
  })
  .sort((x, y) => x.name.localeCompare(y.name))
  .filter((eachCharacter)=>{
  return filterGender === 'all' ? true: eachCharacter.gender === filterGender;
  })

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title"> 
          Personajes de Harry Potter
        </h1>
        <p className="header-title-text">
          Aunque todos sabemos que sin Hermione Granger no hablariamos de saga, sino de un corto.
        </p>
      </header>
      <main className="main">
        <Routes> 
          <Route path='/'
          element={<> 
          <Filters handleNameFilter={handleNameFilter} filterName={filterName} handleHouseFilter={handleHouseFilter} filterHouse={filterHouse} handleGenderFilter={handleGenderFilter} filterGender={filterGender} handleResetAll={handleResetAll}/>
          <CharacterList characterListFiltered={characterListFiltered} errorMsg={errorMsg} filterName={filterName}/></>}>
          </Route>
          <Route path='/character/:characterId'element={<CharacterDetail dataApi={dataApi} handleOnsubmit={handleOnsubmit}/>}>
          </Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>

      </main>
      <footer className="footer"> 
      <p> Karla Fernández Chirinos</p>
      <p>©Adalab 2023</p>
      </footer>
          
    </div>
  );
}


export default App;

