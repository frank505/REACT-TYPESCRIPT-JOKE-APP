import React from 'react'
import './styles.scss';
import 
{
FormControlLabel ,
FormControl,
FormLabel,
Checkbox
} from '@material-ui/core';
import './styles.scss';


const FilterTypes:React.FunctionComponent = () =>
{

    

    return(
    <>
     
     <FormControl component="fieldset"
     className="custom-radio-styles"
     >
      <FormLabel component="legend">Select at least one joke type</FormLabel>
  <FormControlLabel control={<Checkbox name="Single" />} label="Single" />
   <FormControlLabel control={<Checkbox name="Two Part" />} label="Two Part" />
      </FormControl>
    </>
    );
}

export default FilterTypes;
