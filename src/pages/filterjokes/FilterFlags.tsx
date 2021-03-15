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


const FilterFlags:React.FunctionComponent = () =>
{

    

    return(
    <>
     
     <FormControl component="fieldset"
     className="custom-radio-styles"
     >

      <FormLabel component="legend">Select Flags to BlackList</FormLabel>
  <FormControlLabel control={<Checkbox name="Single" />} label="NSFW" />
   <FormControlLabel control={<Checkbox name="Two Part" />} label="religious" />
   <FormControlLabel control={<Checkbox name="Two Part" />} label="sexist jokes" />
   <FormControlLabel control={<Checkbox name="Two Part" />} label="racist" />
      </FormControl>
    </>
    );
}

export default FilterFlags;
