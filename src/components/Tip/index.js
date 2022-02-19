import React from 'react';

import { StyledTip, StyledInput } from './styled'

function Tip(props) {

  // set tip on tip click
  const handleClick = (e) => {
    if(props.tipPercentage === props.tip) {
      return props.setTipPercentage(0)
    }
    props.setTipPercentage(props.tip)
  }
  
  // set tip percentage to the current custom input value
  const handleChange = (e) => {

    const inputValue = e.target.valueAsNumber

    if(!isNaN(inputValue)) {
      props.setTipPercentage(inputValue)
    } else {
      props.setTipPercentage(0)
    }
  }

  // reset tip on custom input focus
  const handleFocus = (e) => {

  }

  // render this giant snake of a code
  return props.custom ? <StyledInput type={props.type} value={props.value} onFocus={handleFocus} onChange={handleChange} placeholder={props.placeholder} /> : <StyledTip className={`${props.tip === props.tipPercentage ? "active" : ""}`} onClick={handleClick}>{props.tip}%</StyledTip>;
}

export default Tip;
