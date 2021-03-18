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
    setFilterValues,
    formValidatorProps
  }:FilterFormProps) =>
{
 
  console.log(flags);  
    console.log(language);

    return(
    <>
    <div>
    <FilterCategories 
     categories={categories} 
     filterValues={filterValues}
     setFilterValues={setFilterValues}
      formValidatorProps={formValidatorProps}   
    />
    </div> 
    <div>
      <Languages 
      language={language}  
      filterValues={filterValues} 
      setFilterValues={setFilterValues}
      formValidatorProps={formValidatorProps}   
      />
    </div> 
    <div>
      <FilterTypes 
      filterValues={filterValues} 
      setFilterValues={setFilterValues} 
      formValidatorProps={formValidatorProps}   
      /> 
    </div>
    <div>
      <FilterFlags 
      flags={flags}  
      filterValues={filterValues} 
      setFilterValues={setFilterValues} 
      formValidatorProps={formValidatorProps} />
    </div>
  
    </>
    );
}

export default FilterForm;
