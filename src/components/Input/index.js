import React from 'react';

import { StyledInput, StyledLabel } from './styled'

function Input(props) {

  const handleBlur = (e) => {

    const inputValue = e.target.value

    props.handleChange(Number(inputValue).toFixed(2))
  }

  return (
    <React.Fragment>
      <StyledLabel htmlFor={props.id}>
        <span>{props.label}</span>
        {props.error && props.error.message.length > 0 && <span className="input__error__message">{props.error.message}</span>}
      </StyledLabel>
      <StyledInput 
          id={props.id} 
          name={props.name} 
          type={props.type} 
          bg={props.icon}
          value={props.value}
          placeholder={props.placeholder}
          borderColor={props.error && props.error.message.length > 0 ? "#E17052 !important" : "#F3F9FA"}
          onBlur={handleBlur}
          onChange={(e) => props.handleChange(Number(e.target.value))}
        />
    </React.Fragment>
  )
}

export default Input;
