import CharacterCard from "./CharacterCard";

const CharacterList = ({characterListFiltered, errorMsg, filterName}) =>{

    const characterHtml = characterListFiltered.map((eachCharacter) => {
        return <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id}/>
    })

    return (
      
        <section>
            <ul>
             {characterHtml}
            </ul>
            {errorMsg && <p> El personaje {filterName}no existe. Llama a J.K.Rowling</p>}
        </section>
        
    );
}

export default CharacterList;
