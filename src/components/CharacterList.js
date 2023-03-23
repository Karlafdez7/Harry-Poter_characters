import CharacterCard from "./CharacterCard";
import Snape from '../images/giphy (1).gif'

const CharacterList = ({characterListFiltered, errorMsg, filterName}) =>{

    const characterHtml = characterListFiltered.map((eachCharacter) => {
        return <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id}/>
    })

    return (
      <> 
        <div className="section-error"> {errorMsg && <p className="section-error-p"> El personaje {filterName} no existe. Llama a J.K.Rowling <img className="section-error-img" src={Snape} alt='Snape te aprueba'/></p> }  </div>
        <section >
            
            <div className="section-list"> 
                <ul className="character-list">
                {characterHtml}
                
                </ul>
            </div>
        </section>


       </> 
    );
}

export default CharacterList;


