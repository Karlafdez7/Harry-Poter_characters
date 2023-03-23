import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import FilterGender from './FilterGender'

const Filters = ({handleHouseFilter, handleNameFilter, filterName, filterHouse, handleGenderFilter, filterGender, handleResetAll}) =>{
    return (
        <section className="section-form">
            <form className="filters-form">
                <FilterName handleNameFilter={handleNameFilter} filterName={filterName}/>
                <FilterHouse handleHouseFilter={handleHouseFilter} filterHouse={filterHouse}/>
                <FilterGender handleGenderFilter={handleGenderFilter} filterGender={filterGender}/>
                <fieldset className="filters-form-reset"> Adaba...
                    <input className="filters-form-reset-input" type='button' value='RESET' title='Reset' onClick={handleResetAll}/> 
                </fieldset>
            </form>

            
        </section>
    );
}

export default Filters
