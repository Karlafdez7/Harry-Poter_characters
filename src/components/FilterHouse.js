const FilterHouse = () =>{
    return (
        <label> Selecciona tu casa:
            <select name="house" id="house" onChange={""}>
                <option value="all"> All</option>
                <option value="Gryffindor"> Gryffindor </option>
                <option value="Slytherin"> Slytherin</option>
                <option value="Hufflepuff"> Hufflepuff</option>
                <option value="Ravenclawall">Ravenclaw</option>

            </select>

        </label>

    );
}

export default FilterHouse;

