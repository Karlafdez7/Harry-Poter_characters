import photoVis from '../images/Vis.png'

const callToApiAll = (filterHouse) => {
  // Llamamos a la API
  return fetch(
    `https://hp-api.onrender.com/api/characters/house/${filterHouse}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Cuando responde la API podemos limpiar los datos aquí
      const selectionApi = data.map((eachCharacter) => {
        return {
          name: eachCharacter.name,
          photo: eachCharacter.image || photoVis,
          species: eachCharacter.species,
          id: eachCharacter.id,
          house: eachCharacter.house,
          gender: eachCharacter.gender,
          status:eachCharacter.alive,
          alternateNames: eachCharacter.alternate_names     
        };
      });
      return selectionApi;
    });
};

const callToApi = (filterHouse) => {
  // Llamamos a la API
  return fetch(
    `https://hp-api.onrender.com/api/characters/house/${filterHouse}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Cuando responde la API podemos limpiar los datos aquí
      const selectionApi = data.map((eachCharacter) => {
        return {
          name: eachCharacter.name,
          photo: eachCharacter.image || photoVis,
          species: eachCharacter.species,
          id: eachCharacter.id,
          house: eachCharacter.house,
          gender: eachCharacter.gender,
          status:eachCharacter.alive,
          alternateNames: eachCharacter.alternate_names     
        };
      });
      return selectionApi;
    });
};




export default callToApi;





