import React from 'react'
import './styles.scss';
import FilterCategories from './FilterCategories'
import Languages from './Languages';
import FilterTypes from './FilterTypes';
import FilterFlags from './FilterFlags';
import FilterFormProps from '../../interfaces/pages/filterjokes/FilterFormProps';





const FilterForm:React.FunctionComponent<FilterFormProps> = (
  {
    categories,
    flags,
    language
  }:FilterFormProps) =>
{
 
  console.log(flags);
    console.log(language);

    return(
    <>
    <div>
    <FilterCategories categories={categories}/>
    </div> 
    <div>
      <Languages language={language}/>
    </div> 
    <div>
      <FilterTypes /> 
    </div>
    <div>
      <FilterFlags flags={flags}/>
    </div>
  
    </>
    );
}

export default FilterForm;
