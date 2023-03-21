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


// - Imágenes
/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
const [dataApi, setDataApi]= useState([])
  /* EFECTOS (código cuando carga la página) */
 
  useEffect(() => {
    callToApi().then((selectionApi) => {
      setDataApi(selectionApi);
      console.log(selectionApi)
    });
  }, []);
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
        <Filters/>
        <CharacterList/>
      </main>

    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;

