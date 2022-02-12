import React from 'react';

import { StyledTip, StyledInput } from './styled'

function Tip(props) {
  return props.custom ? <StyledInput placeholder="Custom" /> : <StyledTip>{props.tip}%</StyledTip>;
}

export default Tip;
