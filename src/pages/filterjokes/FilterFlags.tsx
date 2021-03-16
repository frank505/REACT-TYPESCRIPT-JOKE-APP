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

interface FilterFlagsProps{
    flags:any;
}

const FilterFlags:React.FunctionComponent<FilterFlagsProps> = 
({flags}:FilterFlagsProps) =>
{

    

    return(
    <>
     
     <FormControl component="fieldset"
     className="custom-radio-styles"
     >
       
      <FormLabel component="legend">Select Flags to BlackList(optional)</FormLabel>
      {
      flags=='' || flags==null?
      null
      :
      flags.flags.map((data:any,index:any)=>(
        <FormControlLabel key={index} control={<Checkbox name={data} />} label={data} />
      ))
        }
    </FormControl>
    </>
    );
}

export default FilterFlags;
