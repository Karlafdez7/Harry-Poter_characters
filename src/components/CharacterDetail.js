import { Link, useLocation, matchPath } from 'react-router-dom';
import gryffindor from '../images/gryffindor.png'
import slytherin from '../images/slitherin.png'
import hufflepuff from '../images/hufflepuff.png'
import ravenclaw from '../images/ravenclaw.png'

const CharacterDetail = ({dataApi, handleOnsubmit}) =>{

    const imgHouse = {
      gryffindor: gryffindor,
      slytherin: slytherin,
      hufflepuff: hufflepuff,
      ravenclaw: ravenclaw
    };
    

    const { pathname } = useLocation(); 
    const routeData = matchPath("/character/:characterId", pathname);
    const characterId = routeData !== null ? routeData.params.characterId : null;
    const characterSelected = dataApi.find((eachCharacter) => eachCharacter.id === characterId);


    return (
      characterSelected ? ( 
        <section>
            <Link to={"/"}>Es "Returnooooo!" No "Returnnnnn"</Link>

            <img src={characterSelected.photo} alt={characterSelected.name} title={characterSelected.name}/>
            <ul>
                <li> {characterSelected.name}</li>
                <li>Estatus: {characterSelected.status ? '¡Está vive!' : '¡oh no, se murió!'}</li>
                <li>Especie: {characterSelected.species}</li>
                <li>Género: {characterSelected.gender}</li>
                <li>Casa: {characterSelected.house}</li>
                <li>Alternate Name: {''}{characterSelected.alternateNames.join(' y ') 
                ? characterSelected.alternateNames.join(' y ')  
                : 'noooo' }</li>
                <img src={imgHouse[characterSelected.house.toLocaleLowerCase()]} alt={characterSelected.house}/>
            </ul>
            <form className="form-detail" onSubmit={handleOnsubmit}>
              <label>
                
                Comparte, si sabes que quieres:
              </label>
                <input
                autoComplete="off"
                type="text"
                name="search"
                value={window.location}
                readOnly
              />
            </form>
            
        </section>)
        :
        (<>
        <p>No se ha encontrado personaje</p>
        <Link to={"/"}>Es "Returnooooo!" No "Returnnnnn"</Link>
        </> )
        
    );
}

export default CharacterDetail;

