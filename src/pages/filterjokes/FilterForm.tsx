import React from 'react'
import './styles.scss';
import FilterCategories from './FilterCategories'
import Languages from './Languages';
import FilterTypes from './FilterTypes';
import FilterFlags from './FilterFlags';


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
    <div>
      <FilterTypes/>
    </div>
    <div>
      <FilterFlags/>
    </div>
  
    </>
    );
}

export default FilterForm;
