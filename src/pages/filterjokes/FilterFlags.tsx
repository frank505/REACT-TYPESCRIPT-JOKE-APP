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
import FilterFlagsProps from '../../interfaces/pages/filterjokes/FilterFlagsProps'


const FilterFlags:React.FunctionComponent<FilterFlagsProps> = 
({
    flags,
    filterValues,
    setFilterValues,
    formValidatorProps
}
    :FilterFlagsProps) =>
{

    const captureCheckBoxValue = (event:React.ChangeEvent<HTMLInputElement>):any =>
    {
        let arrValues:any = filterValues?.flags;
        let newValue = event.target.value;
        /**
         * if checkbox is checked and category name doesnt exist in the array 
         */
        if(event.target.checked && !arrValues.includes(newValue))
        {
            arrValues.push(newValue);
           setFilterValues({...filterValues,flags:arrValues});
  
        }
        /**
         * else checkbox is not checked or unchecked and category name  exist in array
         */
        else if(!event.target.checked && arrValues.includes(newValue))
        {
         let newArray =  arrValues.filter((arrayItem:any)  => arrayItem !== newValue);
         setFilterValues({...filterValues,flags:newArray});
        }
  
    }

    return(
    <div  data-testid="filter-flag-test-root-component">
     
     <FormControl component="fieldset"
     className="custom-radio-styles"
     >
       
      <FormLabel component="legend">Select Flags to BlackList(optional)</FormLabel>
      {
      flags=='' || flags==null?
      null
      :
      flags.flags.map((data:any,index:any)=>(
      <FormControlLabel key={index} control={<Checkbox 
        onChange={captureCheckBoxValue}
        value={data}
        data-testid="filter-flags-checkbox"
        name={data} />} label={data} />
      ))
        }
    </FormControl>
    </div>
    );
}

export default FilterFlags;
