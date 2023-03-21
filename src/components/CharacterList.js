import CharacterCard from "./CharacterCard";

const CharacterList = ({characterListFiltered}) =>{

    const characterHtml = characterListFiltered.map((eachCharacter) => {
        return <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id}/>
    })

    return (
        <section>
            <ul>
             {characterHtml}
            </ul>
        </section>
    );
}

export default CharacterList;
