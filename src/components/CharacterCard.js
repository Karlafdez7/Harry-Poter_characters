import { Link } from "react-router-dom"; 

const CharacterCard = ({eachCharacter}) =>{
    return (
        <li className="character-list-items">
            <Link to={`/character/${eachCharacter.id}`}> 
                <img className="character-list-items-image" src={eachCharacter.photo} alt={eachCharacter.name} title={eachCharacter.name}/>
                <h3 className="character-list-items-title">
                {eachCharacter.name}
                </h3>
                <p className="character-list-items-text"> {eachCharacter.species}</p>
            </Link>
        </li>
    );
}

export default CharacterCard;





