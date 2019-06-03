import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));
export function HooksButton(props) {
  const classes = useStyles();
  const[ hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);
  const handleClick = () => {
    props.incrementCallback(5);
    setHasButtonBeenClicked(true);
    props.callback();
  }  

  return (
      <Button variant="contained" onClick={ handleClick }  color="primary" className={ classes.button } >
        { props.text} { props.counter }
      </Button>        
  )
}
