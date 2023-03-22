import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import FilterGender from './FilterGender'

const Filters = ({handleHouseFilter, handleNameFilter, filterName, filterHouse, handleGenderFilter, filterGender, handleResetAll}) =>{
    return (
        <section>
            <form>
                <FilterName handleNameFilter={handleNameFilter} filterName={filterName}/>
                <FilterHouse handleHouseFilter={handleHouseFilter} filterHouse={filterHouse}/>
                <FilterGender handleGenderFilter={handleGenderFilter} filterGender={filterGender}/>
            </form>
            <input type='button' value='Adaba...RESET' title='Reset' onClick={handleResetAll}/> 
        </section>
    );
}

export default Filters

