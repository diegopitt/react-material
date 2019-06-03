import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function SimpleButton(props) {
  const [Clicked, setClicked] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    props.incrementCallback(5);
    setClicked(true);
    props.callback();
  }  

  return (
    <Button variant="contained" color="secondary" onClick={ handleClick } className={ classes.button } disabled={props.disabled === "true" || props.disabled === true }> 
    {props.text} {props.counter}
  </Button>      
  )
}
