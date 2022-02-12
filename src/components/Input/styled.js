import styled from '@emotion/styled'

export const StyledInput = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 5px;
    font-family: Space Mono;
    border: none;
    background: url(${props => props.bg}) no-repeat 17px center #F3F9FA;
    background-size: 13px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    text-align: right;
    color: #00474B;
    padding-right: 17px;
    border: 2px solid ${props => props.borderColor};
    transition: border 150ms ease-in;
    &:focus {
        border: 2px solid #26C2AE;
        outline: 0 none;
    }
`
export const StyledLabel = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Space Mono;
    margin-bottom: 8px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #5E7A7D;
`