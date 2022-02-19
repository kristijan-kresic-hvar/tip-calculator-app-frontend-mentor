import React, { useState } from 'react';
import { StyledInput, StyledLabel } from './styled'

function Input(props) {

  const [error, setError] = useState({
    message: ""
  })

  const handleBlur = (e) => {

    const inputValue = e.target.valueAsNumber

    if(!isNaN(inputValue)) {
      props.setState(inputValue.toFixed(props.decimals))
    } else {
      props.setState(0)
    }

    validateInput()
  }

  const handleChange = (e) => {
    const inputValue = e.target.valueAsNumber

    console.log(typeof inputValue)

    if(!isNaN(inputValue)) {
      props.setState(inputValue)
    } else {
      props.setState(0)
    }

  }

  const validateInput = () => {
    if(props.validate) {
      if(props.value === " " || !props.value > 0) {
        console.log("passed")
        setError({ message: "Can't be zero" })
      } else {
        setError({ message: "" })
      }
    } else return
  }


  return (
    <React.Fragment>
      <StyledLabel htmlFor={props.id}>
        <span>{props.label}</span>
        {error.message.length > 0 && <span className="input__error__message">{error.message}</span>}
      </StyledLabel>
      <StyledInput 
          id={props.id}
          decimals={props.decimals} 
          name={props.name} 
          type={props.type} 
          bg={props.icon}
          value={props.value}
          placeholder={props.placeholder}
          borderColor={error.message.length > 0 ? "#E17052 !important" : "#F3F9FA"}
          onBlur={handleBlur}
          onChange={handleChange}
        />
    </React.Fragment>
  )
}

export default Input;
