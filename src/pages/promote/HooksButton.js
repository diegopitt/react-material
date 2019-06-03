import React, { useState } from "react";
import Button from '@material-ui/core/Button';
export function HooksButton(props) {
 
  const[ hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);
  const handleClick = () => {
    props.incrementCallback(5);
    setHasButtonBeenClicked(true);
    props.callback();
  }  

  return (
      <Button onClick={ handleClick } className={ props.className } disabled={ props.disabled === "true" || props.disabled === true  }>
        { props.text} { props.counter }
        { hasButtonBeenClicked && <div>Button Clicked!</div>}
      </Button>        
  )
}
