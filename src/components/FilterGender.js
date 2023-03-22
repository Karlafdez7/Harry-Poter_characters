const FilterGender = ({handleGenderFilter, filterGender}) => {

    const handleGenderChecked = (ev) => {
        handleGenderFilter(ev.target.value)
    }
    return (
        <>       
            <input type='radio' id='all' name='all' value='all' checked={filterGender ==='all'} onChange={handleGenderChecked}>
            </input>
            <label> Todos los Géneros:</label>            
            <input type="radio" id='male' name='male'  value='male' checked={filterGender ==='male'} onChange={handleGenderChecked}>
            </input>
            <label > Masculino:</label>
            <input type="radio" id='female' name='female' value='female' checked={filterGender ==='female'} onChange={handleGenderChecked}>
            </input>
            <label> Femenino :</label>
        </>
    )
}

export default FilterGender;
