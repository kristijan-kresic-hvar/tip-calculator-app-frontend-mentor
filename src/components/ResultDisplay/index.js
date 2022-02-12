import React from 'react';

import { StyledResultScreen } from './styled'

function ResultDisplay(props) {


  return (
      <StyledResultScreen>
        <div className="tip__amount">
          <div className="tip__amount__info">
            <h2>Tip Amount</h2>
            <small>/ person</small>
          </div>
          <p className="tip__amount__result">$0.00</p>
        </div>
        <div className="total">
          <div className="total__info">
              <h2>Total</h2>
              <small>/ person</small>
          </div>
          <p className="total__result">{props.numberOfGuests > 0 ? `$${(props.billAmount / props.numberOfGuests).toFixed(2)}` : "$0.00"}</p>
        </div>
        <div className="reset">
          <button className="disabled">Reset</button>
        </div>
      </StyledResultScreen>
  );
}

export default ResultDisplay;
