import React from 'react'
import './styles.scss';
import FilterCategories from './FilterCategories'
import Languages from './Languages';
import FilterTypes from './FilterTypes';
import FilterFlags from './FilterFlags';


interface FilterFormProps {
  categories:any;
  flags:any;
}


const FilterForm:React.FunctionComponent<FilterFormProps> = (
  {
    categories,flags
  }:FilterFormProps) =>
{
 
    

    return(
    <>
    <div>
    <FilterCategories categories={categories}/>
    </div> 
    {/* <div>
      <Languages />
    </div>  */}
    <div>
      <FilterTypes/>
    </div>
    <div>
      <FilterFlags flags={flags}/>
    </div>
  
    </>
    );
}

export default FilterForm;
