import { Link, useLocation, matchPath } from 'react-router-dom';
import griffindor from '../image/gryffindor.png'
import slitherin from '../image/slitherin.png'
import hufflepuff from '../image/hufflepuff.png'
import ravenclaw from '../image/ravenclaw.png'

const CharacterDetail = ({dataApi, handleOnsubmit}) =>{

    const imgHouse = {
      griffindor: griffindor,
      slitherin: slitherin,
      hufflepuff: hufflepuff,
      ravenclaw: ravenclaw,  

    };

    const { pathname } = useLocation(); 
    const routeData = matchPath("/character/:characterId", pathname);
    const characterId = routeData !== null ? routeData.params.characterId : null;
    const characterSelected = dataApi.find((eachCharacter) => eachCharacter.id === characterId);

//     const renderAlternateNames = (characterSelected) => {
//     const eachAlternateName = characterSelected.alternateNames;
//     const alternate = eachAlternateName.map((eachAlternate) => {
//       return <li>{eachAlternate}</li>;
//     });
//     return alternate;
//   };
    return (
        <section>
            <img src={characterSelected.photo} alt={characterSelected.name} title={characterSelected.name}/>
            <ul>
                <li> {characterSelected.name}</li>
                <li>Estatus: {characterSelected.status ? '¡Está vive!' : '¡oh no, se murió!'}</li>
                <li>Especie: {characterSelected.species}</li>
                <li>Género: {characterSelected.gender}</li>
                <li>Casa: {characterSelected.house}</li>
                <li>Alternate Name: {characterSelected.alternateNames}  </li>
                <img src={imgHouse[characterSelected.house.toLocaleLowerCase()]} alt={characterSelected.house} />
            </ul>
            <form className="form-detail" onSubmit={handleOnsubmit}>
              <label>
                
                Comparte, si sabes que quieres:
              </label>
                <input
                autoComplete="off"
                type="text"
                name="search"
                value={`beta.adalab.es/modulo-3-evaluacion-final-Karlafdez7/#/character/${characterSelected.id}
                `}
                readOnly
              />
            </form>
            <Link to={"/"}>Es "Returnooooo!" No "Returnnnnn"</Link>
        </section>
    );
}

export default CharacterDetail;

