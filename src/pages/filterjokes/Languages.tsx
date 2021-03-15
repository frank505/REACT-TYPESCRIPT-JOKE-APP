import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {FormLabel} from '@material-ui/core';

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

const Languages: React.FunctionComponent = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as number);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
        <FormLabel component="legend"  className={classes.button} 
        onClick={handleOpen}>Select A Language</FormLabel>
      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Languages</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>English(EN)</MenuItem>
          <MenuItem value={20}>Spanish</MenuItem>
          <MenuItem value={30}>French</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Languages;