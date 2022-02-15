import React, { useState, useEffect } from 'react';

import { StyledResultScreen } from './styled'
import { calcTipPerPerson, calcTotalPerPerson } from '../../helpers'

function ResultDisplay(props) {

  const [tipAmount, setTipAmount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {

    if(!props.billAmount || !props.numberOfGuests || !Number(props.numberOfGuests > 0)) {
      setTipAmount(0)
      setTotalAmount(0)
      return
    }
    // set total tip amount
    setTipAmount(Number(calcTipPerPerson(props.billAmount, props.numberOfGuests, props.tipPercentage)))
    // set total bill amount ( per person )
    setTotalAmount(Number(calcTotalPerPerson(props.billAmount, props.numberOfGuests, props.tipPercentage)))

  }, [props.billAmount, props.numberOfGuests, props.tipPercentage])

  // Helper variable to save some space
  const haveData = props.billAmount && props.numberOfGuests > 0 && props.billAmount > 0

  return (
      <StyledResultScreen>
        <div className="tip__amount">
          <div className="tip__amount__info">
            <h2>Tip Amount</h2>
            <small>/ person</small>
          </div>
          <p className="tip__amount__result">{ tipAmount ? "$" + tipAmount.toFixed(2) : "$0.00" }</p>
        </div>
        <div className="total">
          <div className="total__info">
              <h2>Total</h2>
              <small>/ person</small>
          </div>
          <p className="total__result">{ totalAmount ? "$" + totalAmount.toFixed(2) : "$0.00" }</p>
        </div>
        <div className="reset">
          <button onClick={() => props.reset()} className={`${!haveData ? "disabled" : ""}`}>Reset</button>
        </div>
      </StyledResultScreen>
  );
}

export default ResultDisplay;
