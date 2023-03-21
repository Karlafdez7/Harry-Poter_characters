const FilterName = ({handleNameFilter, filterName}) =>{

    const inputName = (ev) => {
        handleNameFilter(ev.target.value);
    }

    return (
        <label htmlFor=""> Busca personaje:
            <input type="search" placeholder="Hermione Granger" autoComplete="off" value={filterName} onChange={inputName}>
            </input>
        </label>
    );
}

export default FilterName




