import { Link, useLocation, matchPath } from 'react-router-dom';

const CharacterDetail = ({dataApi}) =>{

    const { pathname } = useLocation(); 
    const routeData = matchPath("/character/:characterId", pathname);
    const characterId = routeData !== null ? routeData.params.characterId : null;
    const characterSelected = dataApi.find((eachCharacter) => eachCharacter.id === characterId);
    return (
        <section>
            <img src={characterSelected.photo} alt={characterSelected.name} title={characterSelected.name}/>
            <ul>
                <li> {characterSelected.name}</li>
                <li>Estatus: {characterSelected.status ? '¡Está vive!' : '¡oh no, se murió!'}</li>
                <li>Especie: {characterSelected.species}</li>
                <li>Género: {characterSelected.gender}</li>
                <li>Casa: {characterSelected.house}</li>
                <li>Alternate Name: {characterSelected.alternateNames}</li>
            </ul>
            <Link to={"/"}>Es "Returnooooo!" No "Returnnnnn"</Link>
        </section>
    );
}

export default CharacterDetail;

