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

 const FilterCategories:React.FunctionComponent = () => 
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
          <div>
          <FormControlLabel control={<Checkbox name="checkedA" />} label="Category A" />
          <FormControlLabel control={<Checkbox name="checkedB" />} label="Category B" />
          <FormControlLabel control={<Checkbox name="checkedC" />} label="Category C" />
          </div>
          :
          null
      }
         
      </div>
    );
}

export default FilterCategories;
