import React,{useState,useEffect} from 'react';
import 
{
Radio,
RadioGroup,
FormControlLabel ,
FormControl,
FormLabel,
Checkbox
} from '@material-ui/core';
import FilterCategoriesProps from '../../interfaces/pages/filterjokes/FilterCategoriesProps'
import CircularProgress from '@material-ui/core/CircularProgress';



 const FilterCategories:React.FunctionComponent<FilterCategoriesProps> = 
 (
   {
     categories, 
     filterValues,
     setFilterValues,
     formValidatorProps
    }:FilterCategoriesProps) => 
{
   
   console.log(formValidatorProps);






    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):any => 
    {
      
      setFilterValues({ ...filterValues, category:event.target.value, selectedCategory:[]});
    };
 
    const captureCheckBoxValue = (event:React.ChangeEvent<HTMLInputElement>):any =>
    {

      let arrValues:any = filterValues?.selectedCategory;
     
      let newValue = event.target.value;
      /**
       * if checkbox is checked and category name doesnt exist in the array 
       */
      if(event.target.checked && !arrValues.includes(newValue))
      {
          arrValues.push(newValue);
         setFilterValues({...filterValues,selectedCategory:arrValues});

      }
      /**
       * else checkbox is not checked or unchecked and category name  exist in array
       */
      else if(!event.target.checked && arrValues.includes(newValue))
      {
       let newArray =  arrValues.filter((arrayItem:any)  => arrayItem !== newValue);
       setFilterValues({...filterValues,selectedCategory:newArray});
      }

      }
     


    return (
        <div>  
         <div>
         <FormControl component="fieldset">
      <FormLabel component="legend">Select A Category(required)</FormLabel>
      <RadioGroup aria-label="gender"
      className="custom-radio-styles custom-radio-test"
      name="gender1" value={filterValues.category}
      data-testid="radio-group-controllers"
      onChange={handleChange}
      >
        <FormControlLabel value="Any"
        control={<Radio />} label="Any" />
        <FormControlLabel value="Custom" control={<Radio />} 
        data-testid="show-custom-categories"
        label="Custom" />
      </RadioGroup>
    </FormControl>
      </div>
      {
          filterValues.category!='Any'?
          categories=='' || categories == null?
          <CircularProgress  color="secondary" />
          : 
          categories.hasOwnProperty('categories')?
         
            categories.categories.map((data:any,index:number|string)=>(
              <FormControlLabel
              key={index}
              control={<Checkbox name={data}
              data-testid="check-user" 
              onChange={captureCheckBoxValue}
              value={data}
              />} label={data} />
            ))
          :
          <b className="data-failed-fetch" >Failed to fetch data</b>
          :
          null
        }

        <div className="validator-error">
        {formValidatorProps != '' ? formValidatorProps.category:''}   
       </div> 
      </div>
    );
}

export default FilterCategories;
