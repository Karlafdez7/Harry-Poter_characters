import { Link, useLocation, matchPath } from 'react-router-dom';
import gryffindor from '../images/gryffindor.png'
import slytherin from '../images/slytherin.png'
import hufflepuff from '../images/hufflepuff.jpg'
import ravenclaw from '../images/ravenclaw.jpg'
import Loader from './Loader'



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

    if (dataApi.length === 0) {
    return <Loader></Loader>;
    }   

    return (
    
      characterSelected ? ( 
          
          <section className='characterCard'> 
          <Link className='characterCard-list-link third' to={"/"}> Es retuuurno, no returnóóó
            <i class="fa-sharp fa-solid fa-house"></i>
          </Link>       
              <ul className='characterCard-list'>
                
                <div className='characterCard-list-image'> 
                <img className='characterCard-list-image-item'src={characterSelected.photo} alt={characterSelected.name} title={characterSelected.name}/>
                </div>
                <div className='characterCard-list-items'> 
                  <li className='characterCard-list-items-item name'> {characterSelected.name}</li>
                  <li className='characterCard-list-items-item'>Estatus: {characterSelected.status ? '¡Está vive!' : '¡oh no, se murió!'}</li>
                  <li className='characterCard-list-items-item'>Especie: {characterSelected.species}</li>
                  <li className='characterCard-list-items-item'>Género: {characterSelected.gender}</li>
                  <li className='characterCard-list-items-item'>Casa: {characterSelected.house}</li>
                  <li className='characterCard-list-items-item'>Alternate Name: {''}{characterSelected.alternateNames.join(' y ') 
                  ? characterSelected.alternateNames.join(' y ')  
                  : 'noooo' }</li>
                  <img className='characterCard-list-imageHouse'src={imgHouse[characterSelected.house.toLocaleLowerCase()]} alt={characterSelected.house}/>
                  </div>
              </ul>
              <form className="characterCard-form-link" onSubmit={handleOnsubmit}>
                <label className="characterCard-form-link-label">
                  Comparte, si sabes que quieres:
                </label>
                  <input className="characterCard-form-link-label-input"
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
          <div className='characterEror'> 
            <p className='characterError-text'>No se ha encontrado personaje</p>
            <Link className='characterError-link'to={"/"}>Es "Returnooooo!" No "Returnnnnn"</Link>
          </div>
          </> )
 
    );
}

export default CharacterDetail;

