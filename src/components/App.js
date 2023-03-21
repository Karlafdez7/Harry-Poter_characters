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

// - Imágenes
/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
const [dataApi, setDataApi]= useState([])
const [filterName, setFilterName] = useState ("")
const [filterHouse, setFilterHouse] = useState("Gryffindor")
const [errorMsg, setErrorMsg] = useState ('')
  /* EFECTOS (código cuando carga la página) */
 
  useEffect(() => {
    callToApi(filterHouse).then((selectionApi) => {
      setDataApi(selectionApi);
      console.log(selectionApi)
    });
  }, [filterHouse]);

  const handleNameFilter = (value) => {
    if (dataApi=== setFilterName(value)){
      return true;
    } else if (setFilterName ===true) {
      setErrorMsg('')
    }
    else {
      setErrorMsg (<p> No hemos encontrado el personaje</p>)
    }
  }

  const handleHouseFilter = (value) => {
    setFilterHouse(value);
  }

  const characterListFiltered = dataApi.filter((eachCharacter) => {
    return eachCharacter.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase());
  })
  // .filter((eachCharacter)=>{
  //     return eachCharacter.house === filterHouse;
  //   })
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
          <Filters handleNameFilter={handleNameFilter} filterName={filterName} handleHouseFilter={handleHouseFilter} filterHouse={filterHouse}  />
          <CharacterList characterListFiltered={characterListFiltered}/></>}>
          </Route>
          <Route path='/character/:characterId'element={<CharacterDetail dataApi={dataApi}/>}>

          </Route>
        </Routes>
        {errorMsg}
      </main>
          
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;

