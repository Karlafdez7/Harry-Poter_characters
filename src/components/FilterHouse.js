const FilterHouse = ({handleHouseFilter, filterHouse}) =>{

    const selectHouse =(ev)=> {
        handleHouseFilter(ev.target.value)
    }    
    return (
        <fieldset className="filters-form-house"> 
            <label > Selecciona tu casa:</label>
                <select className="filters-form-house-select" name="house" id="house" onChange={selectHouse} value={filterHouse}>
                    <option className="filters-form-house-select-option" value="Gryffindor"> Gryffindor </option>
                    <option className="filters-form-house-select-option" value="Slytherin"> Slytherin</option>
                    <option className="filters-form-house-select-option" value="Hufflepuff"> Hufflepuff</option>
                    <option className="filters-form-house-select-option" value="Ravenclaw">Ravenclaw</option>

                </select>

            
        </fieldset>
    );
}

export default FilterHouse;

