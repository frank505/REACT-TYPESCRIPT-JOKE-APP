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
    language,
    filterValues,
    setFilterValues
  }:FilterFormProps) =>
{
 
  console.log(flags);
    console.log(language);

    return(
    <>
    <div>
    <FilterCategories categories={categories} filterValues={filterValues}
    setFilterValues={setFilterValues}
    />
    </div> 
    <div>
      <Languages language={language}  filterValues={filterValues} 
      setFilterValues={setFilterValues}/>
    </div> 
    <div>
      <FilterTypes   /> 
    </div>
    <div>
      <FilterFlags flags={flags}  filterValues={filterValues} 
      setFilterValues={setFilterValues}/>
    </div>
  
    </>
    );
}

export default FilterForm;
