import React, { useState, useEffect } from 'react';

import Input from '../Input'
import Tip from '../Tip'
import ResultDisplay from '../ResultDisplay'

import { StyledTipCalculator, StyledTipCalculatorLeft, StyledTipCalculatorRight, StyledTipContainer } from './styled';

import iconPerson from '../../assets/images/icon-person.svg'
import iconDollar from '../../assets/images/icon-dollar.svg'

function TipCalculator(props) {

  const [billAmount, setBillAmount] = useState(0)
  const [tipPercentage, setTipPercentage] = useState("")
  const [numberOfGuests, setNumberOfGuests] = useState("")
  const [error, setError] = useState({
      message: ""
  })

  const tips = props.tipOptions?.map(tip => <Tip key={tip} tip={tip} tipPercentage={tipPercentage} setTipPercentage={setTipPercentage} />)

  // check if number of guests input is 0 and if it is set error and its message
  useEffect(() => {

    if(numberOfGuests !== "" && !Number(numberOfGuests) > 0) {
      setError({ message: "Can't be zero" })
    } else {
      setError({ message: "" })
    }
  
  },[numberOfGuests])

  // function to run when bill input changes
  const handleBillChange = (value) => {
    setBillAmount(value || 0)
  }

  // function to run when number of guests input changes
  const handleGuestsChange = (value) => {
    setNumberOfGuests(value || 0)
  }

  // used for reset button
  const resetState = () => {
    setBillAmount(0)
    setTipPercentage("")
    setNumberOfGuests("")
  }

  return (
    <StyledTipCalculator>
      <StyledTipCalculatorLeft>
        <Input 
          id="bill"
          name="bill"
          icon={iconDollar} 
          type="number" 
          label="Bill"
          decimals={2}
          placeholder="0"
          value={billAmount}
          handleChange={handleBillChange}
        />
        {tips && <StyledTipContainer>
          <h3>Select Tip %</h3>
          <div className="tips">
            {tips}
            {props.customTip && <Tip custom={true} value={tipPercentage} tipPercentage={tipPercentage} setTipPercentage={setTipPercentage}/>}
          </div>
        </StyledTipContainer>}
        <Input 
          id="guests"
          name="guests"
          icon={iconPerson} 
          type="number" 
          label="Number of People" 
          placeholder="0"
          error={error}
          value={numberOfGuests}
          handleChange={handleGuestsChange}
        />
      </StyledTipCalculatorLeft>
      <StyledTipCalculatorRight>
        <ResultDisplay 
          billAmount={billAmount} 
          numberOfGuests={numberOfGuests} 
          tipPercentage={tipPercentage}
          reset={resetState}
        />
      </StyledTipCalculatorRight>
    </StyledTipCalculator>
  )
}

export default TipCalculator;
