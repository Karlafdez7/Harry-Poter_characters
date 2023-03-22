/* SECCIÓN DE IMPORT */
// - De React
// import { useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";
// - Nuestros
// - Sass
import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import { Routes, Route} from 'react-router-dom';
import CharacterDetail from './CharacterDetail'
import NotFound from "./NotFound";

// - Imágenes
/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
const [dataApi, setDataApi]= useState([])
const [filterName, setFilterName] = useState ("")
const [filterHouse, setFilterHouse] = useState("Gryffindor")
const [filterGender, setFilterGender] =useState ('all')
const [errorMsg, setErrorMsg] =useState (false);
  /* EFECTOS (código cuando carga la página) */
 
  useEffect(() => {
    callToApi(filterHouse).then((selectionApi) => {
      setDataApi(selectionApi);
      console.log(selectionApi)
    });
  }, [filterHouse]);

  const handleNameFilter = (value) => {
    setFilterName(value)

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
  }

  const characterListFiltered = dataApi.filter((eachCharacter) => {
    return eachCharacter.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase());
  })
  .sort((x, y) => x.name.localeCompare(y.name))
  .filter((eachCharacter)=>{
  return filterGender === 'all' ? true: eachCharacter.gender === filterGender;
  })
  // if (characterListFiltered.length === 0 && !errorMsg){
  //    setErrorMsg(true)
  // }else if (characterListFiltered.length ===0 && errorMsg) {
  //     setErrorMsg(false)
  //   }

 
  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return (
    <div className="App">
      <header className="header">
        <h1 className="title"> 
          Hermione Granger 
        </h1>
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
          
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;

