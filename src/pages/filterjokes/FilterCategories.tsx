import React from 'react';
import 
{
Radio,
RadioGroup,
FormControlLabel ,
FormControl,
FormLabel,
Checkbox
} from '@material-ui/core';

interface FilterCategoriesProps{
categories:any;

}


 const FilterCategories:React.FunctionComponent<FilterCategoriesProps> = 
 ({categories}:FilterCategoriesProps) => 
{
   
    const [value, setValue] = React.useState<string>('Any');

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
      className="custom-radio-styles"
      name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="Any" control={<Radio />} label="Any" />
        <FormControlLabel value="Custom" control={<Radio />} label="Custom" />
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
