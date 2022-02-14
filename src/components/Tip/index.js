import React from 'react';

import { StyledTip, StyledInput } from './styled'

function Tip(props) {

  // set tip on tip click
  const handleClick = (e) => {
    if(props.tipPercentage === props.tip) {
      return props.setTipPercentage("")
    }
    props.setTipPercentage(props.tip)
  }
  
  // set tip percentage to the current custom input value
  const handleChange = (e) => {
    props.setTipPercentage(Number(e.target.value))
  }

  // reset tip on custom input focus
  const handleFocus = (e) => {

    const value = Number(e.target.value)

    // if there is already a value, use that value instead
    props.setTipPercentage(value || 0)
  }

  // render this giant snake of a code
  return props.custom ? <StyledInput value={props.value} onFocus={handleFocus} onChange={handleChange} placeholder="Custom" /> : <StyledTip className={`${props.tip === props.tipPercentage ? "active" : ""}`} onClick={handleClick}>{props.tip}%</StyledTip>;
}

export default Tip;
