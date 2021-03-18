import React,{useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {FormLabel} from '@material-ui/core';
import LanguageProps from '../../interfaces/pages/filterjokes/LanguageProps'
import { alertNotification } from '../../Utilities/HelperFunc';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);



const Languages: React.FunctionComponent<LanguageProps> = ({
  language,
  filterValues,
  setFilterValues,
  formValidatorProps
}:LanguageProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  console.log(language);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => 
  {
    if(event.target.value!=language.defaultLanguage)
    {
      return alertNotification('Language Selection Information',
      'Error you selected a language that is not English','info');
    }
    
    setFilterValues({...filterValues, language: event.target.value});
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (

    <div data-testid="filter-language-test-root-elem">
 
      {
        language=='' || language==null?
        <CircularProgress  color="secondary" />
        :
        language.hasOwnProperty('defaultLanguage') ?
       <>
       <FormLabel component="legend"  className={classes.button} 
        onClick={handleOpen}>Select A Language(Please note English only is allowed)(required)</FormLabel>
      
      <FormControl className={classes.formControl}>
        <InputLabel 
        id="demo-controlled-open-select-label"
        data-testid="demo-controlled-open-select-label"
        >Languages</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          data-testid="select-data-test-id"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={filterValues.language}
          onChange={handleChange}
        >
          {
            language.possibleLanguages.map((data:any,index:number)=>(
              <MenuItem value={data.code}
              key={index}
              >
                {data.code+" "+data.name}
                </MenuItem>
            ))
          }
          
          
        </Select>
      </FormControl>
       </> 
       :
       <b className="data-failed-fetch" >Failed to fetch data</b>
      }
        
        <div className="validator-error">
        {formValidatorProps != '' ? formValidatorProps.language:''}   
       </div> 

    </div>
  );
}

export default Languages;