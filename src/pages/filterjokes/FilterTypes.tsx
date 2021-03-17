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
import FilterTypesProps from '../../interfaces/pages/filterjokes/FilterTypesProps';


const FilterTypes:React.FunctionComponent<FilterTypesProps> = (
                                   {
                                    filterValues,
                                    setFilterValues
                                   }:FilterTypesProps) =>
{

    
    const captureCheckBoxValue = (event:React.ChangeEvent<HTMLInputElement>):any =>
    {
        let arrValues:any = filterValues?.jokeType;
     
        let newValue = event.target.value;
        /**
         * if checkbox is checked and category name doesnt exist in the array 
         */
        if(event.target.checked && !arrValues.includes(newValue))
        {
            arrValues.push(newValue);
           setFilterValues({...filterValues,jokeType:arrValues});
  
        }
        /**
         * else checkbox is not checked or unchecked and category name  exist in array
         */
        else if(!event.target.checked && arrValues.includes(newValue))
        {
         let newArray =  arrValues.filter((arrayItem:any)  => arrayItem !== newValue);
         setFilterValues({...filterValues,jokeType:newArray});
        }
  
    }

    return(
    <>
     <div
     data-testid="filter-types-element"
     >
     <FormControl component="fieldset"
     className="custom-radio-styles"
     >
      <FormLabel component="legend" >Select at least one joke type</FormLabel>
  <FormControlLabel control={<Checkbox name="Single"  
               onChange={captureCheckBoxValue} 
               data-testid="filter-types-checkbox"
               value="single"
               />} label="Single" />
   <FormControlLabel control={<Checkbox name="Two Part" 
   data-testid="filter-types-checkbox"
    onChange={captureCheckBoxValue}
        value="twopart"
   />} label="Two Part" />
      </FormControl>
      </div>
    </>
    );
}

export default FilterTypes;
