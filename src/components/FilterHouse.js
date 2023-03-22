const FilterHouse = ({handleHouseFilter, filterHouse}) =>{

    const selectHouse =(ev)=> {
        handleHouseFilter(ev.target.value)
    }    
    return (
        <label> Selecciona tu casa:
            <select name="house" id="house" onChange={selectHouse} value={filterHouse}>
                <option value="Gryffindor"> Gryffindor </option>
                <option value="Slytherin"> Slytherin</option>
                <option value="Hufflepuff"> Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>

            </select>

        </label>

    );
}

export default FilterHouse;

