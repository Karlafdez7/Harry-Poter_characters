import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

const Filters = ({handleHouseFilter, handleNameFilter, filterName, filterHouse}) =>{
    return (
        <section>
            <form>
                <FilterName handleNameFilter={handleNameFilter} filterName={filterName}/>
                <FilterHouse handleHouseFilter={handleHouseFilter} filterHouse={filterHouse}/>
            </form>
        </section>
    );
}

export default Filters

