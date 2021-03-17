import React,{useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {FormLabel} from '@material-ui/core';
import LanguageProps from '../../interfaces/pages/filterjokes/LanguageProps'

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
  setFilterValues
}:LanguageProps) => {
  const classes = useStyles();
  const [languages, setLanguages] = useState<string | number>('');
  const [open, setOpen] = useState(false);

  console.log(language);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLanguages(event.target.value as string);
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
        null
        :
       <>
       <FormLabel component="legend"  className={classes.button} 
        onClick={handleOpen}>Select A Language</FormLabel>
      
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
          value={languages}
          onChange={handleChange}
        >
          
          <MenuItem value={language.defaultLanguage}>{language.defaultLanguage+" English"}</MenuItem>
          
        </Select>
      </FormControl>
       </>
      }
        
     

    </div>
  );
}

export default Languages;