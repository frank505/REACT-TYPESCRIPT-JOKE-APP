import React,{useState} from 'react';
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




 const FilterCategories:React.FunctionComponent<FilterCategoriesProps> = 
 (
   {
     categories, 
    }:FilterCategoriesProps) => 
{
   
    const [value, setValue] = useState<string>('Any');

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):any => 
    {
      setValue(event.target.value);
    };

    return (
        <div>  
         <div>
         <FormControl component="fieldset">
      <FormLabel component="legend">Select A Category</FormLabel>
      <RadioGroup aria-label="gender"
      className="custom-radio-styles custom-radio-test"
      name="gender1" value={value}
      data-testid="radio-group-controllers"
      onChange={handleChange}>
        <FormControlLabel value="Any"
        data-testid="show-any-categories"
        control={<Radio />} label="Any" />
        <FormControlLabel value="Custom" control={<Radio />} 
        data-testid="show-custom-categories"
        label="Custom" />
      </RadioGroup>
    </FormControl>
      </div>
      {
          value!='Any'?
          categories=='' || categories == null?
          null
          :
          categories.categories.map((data:any,index:number|string)=>(
            <FormControlLabel
            key={index}
            control={<Checkbox name={data} />} label={data} />
          ))
         
          :
          null
      }
         
      </div>
    );
}

export default FilterCategories;
