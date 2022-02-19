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

  const tips = props.tipOptions?.map(tip => <Tip key={tip} tip={tip} tipPercentage={tipPercentage} setTipPercentage={setTipPercentage} />)

  // used for reset button
  const resetState = () => {
    setBillAmount(0)
    setTipPercentage(0)
    setNumberOfGuests(0)
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
          value={billAmount === 0 ? " " : billAmount}
          setState={setBillAmount}
        />
        {tips && <StyledTipContainer>
          <h3>Select Tip %</h3>
          <div className="tips">
            {tips}
            {props.customTip && <Tip 
                                  custom={true}
                                  type={"number"}
                                  value={tipPercentage === 0 ? " " : tipPercentage} 
                                  tipPercentage={tipPercentage} 
                                  setTipPercentage={setTipPercentage} 
                                  placeholder="Custom"
                                />}
          </div>
        </StyledTipContainer>}
        <Input 
          id="guests"
          name="guests"
          icon={iconPerson} 
          type="number" 
          label="Number of People" 
          placeholder="0"
          decimals={0}
          value={numberOfGuests === 0 ? " " : numberOfGuests}
          setState={setNumberOfGuests}
          validate={true}
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
