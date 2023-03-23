const FilterName = ({handleNameFilter, filterName}) =>{

    const inputName = (ev) => {
        handleNameFilter(ev.target.value);
        ev.preventDefault(); 

    }

    return (
        <fieldset> 
            <label className="filters-form-name" htmlFor=""> Busca personaje:
                <input className="filters-form-name-input" type="search" placeholder="Hermione Granger" autoComplete="off" value={filterName} onChange={inputName}>
                </input>
            </label>
        </fieldset>
    );
}

export default FilterName;






