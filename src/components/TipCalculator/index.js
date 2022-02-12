import React, { useState, useEffect } from 'react';

import Input from '../Input'
import Tip from '../Tip'
import ResultDisplay from '../ResultDisplay'

import { StyledTipCalculator, StyledTipCalculatorLeft, StyledTipCalculatorRight, StyledTipContainer } from './styled';

import iconPerson from '../../assets/images/icon-person.svg'
import iconDollar from '../../assets/images/icon-dollar.svg'

function TipCalculator(props) {

  const [billAmount, setBillAmount] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(0)
  const [numberOfGuests, setNumberOfGuests] = useState(0)
  const [error, setError] = useState({
      message: ""
  })

  const tips = props.tipOptions?.map(tip => <Tip key={tip} tip={tip} />)

  useEffect(() => {

    if(!Number(numberOfGuests) > 0) {
      setError({ message: "Can't be zero" })
    } else {
      setError({ message: "" })
    }
  
  },[numberOfGuests])

  const handleBillChange = (value) => {
    setBillAmount(value || "")
  }

  const handleGuestsChange = (value) => {
    setNumberOfGuests(value || "")
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
          placeholder="0"
          value={billAmount}
          handleChange={handleBillChange}
        />
        {tips && <StyledTipContainer>
          <h3>Select Tip %</h3>
          <div className="tips">
            {tips}
            {props.customTip && <Tip custom={true} />}
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
          handleChange={handleGuestsChange}
        />
      </StyledTipCalculatorLeft>
      <StyledTipCalculatorRight>
        <ResultDisplay billAmount={billAmount} numberOfGuests={numberOfGuests} />
      </StyledTipCalculatorRight>
    </StyledTipCalculator>
  )
}

export default TipCalculator;
