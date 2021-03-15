import React from 'react'
import './styles.scss';
import FilterCategories from './FilterCategories'
import Languages from './Languages';


const FilterForm:React.FunctionComponent = () =>
{

    

    return(
    <>
    <div>
    <FilterCategories/>
    </div> 
    <div>
      <Languages />
    </div> 
  
    </>
    );
}

export default FilterForm;
