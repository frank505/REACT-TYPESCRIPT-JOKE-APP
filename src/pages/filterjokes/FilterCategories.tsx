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


   const [isChecked,setIsChecked] = useState<any>("Any");

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
     
   const changeCheckBox = (event:React.ChangeEvent<HTMLInputElement>):any =>
   {
     setIsChecked(event.target.value);
     
   }

    return (
        <div>  
         <div>
         <FormControl component="fieldset">
      <FormLabel component="legend">Select A Category(required)</FormLabel>
      <RadioGroup aria-label="gender"
      className="custom-radio-styles custom-radio-test"
      name="gender1" value={filterValues.category}
      data-testid="show-custom-categories"
      onChange={handleChange}
      > 
      <FormControlLabel 
        data-testid="radio-elem-control"
        value="Any"
        control={<Radio 
              checked={isChecked==='Any'}
              name="checkbox-content"
              onChange={changeCheckBox}
           />} label="Any" 
           
           />

        <FormControlLabel value="Custom"   
        data-testid="radio-elem-control"
        control={<Radio  
          checked={isChecked === 'Custom'}
          onChange={changeCheckBox}
          name="checkbox-content"
        />} 
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

        <div className="validator-error" data-testid="error-form-message-test-id">
        {formValidatorProps != '' ? formValidatorProps.category:''}   
       </div> 
      </div>
    );
}

export default FilterCategories;
