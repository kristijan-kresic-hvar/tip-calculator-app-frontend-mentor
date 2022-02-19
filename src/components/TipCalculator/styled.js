import styled from '@emotion/styled'

export const StyledTipCalculator = styled.div`
    width: 100%;
    max-width: 920px;
    min-width: 360px;
    margin: 0 auto;
    background: #FFFFFF;
    box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
    border-radius: 25px;
    padding: 32px;
    display: flex;
    align-items: center;

    @media (max-width: 500px) {
        padding: 32px 24px;
    }

    @media (max-width: 920px) {
        flex-direction: column;
    }
`

export const StyledTipCalculatorLeft = styled.div`
    min-width: 378px;
    margin-right: 50px;
    flex: 1;

    @media (max-width: 500px) {
        min-width: 0;
        width: 100%;
    }

    @media (max-width: 920px) {
        margin: 0 auto;
    }
`

export const StyledTipCalculatorRight = styled.div`
    min-width: 378px;
    background: #00474B;
    border-radius: 15px;
    min-height: 417px;
    flex: 1;
    position: relative;

    @media (max-width: 500px) {
        min-width: 0;
        width: 100%;
        min-height: 327px;
    }

    @media (max-width: 920px) {
        margin-top: 32px;
    }
`

export const  StyledTipContainer = styled.div`
    margin: 40px 0;
    h3 {
        font-family: Space Mono;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #5E7A7D;
        margin-bottom: 12px;
    }
    .tips {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-left: -10px;
    }

    input::-webkit-input-placeholder {
        font-family: Space Mono;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        text-align: right;
        color: #547878;
    }

    input::-moz-placeholder {
        font-family: Space Mono;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        text-align: right;
        color: #547878;
    }

    input:-ms-input-placeholder {
        font-family: Space Mono;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        text-align: right;
        color: #547878;
    }

    input:-o-input-placeholder {
        font-family: Space Mono;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        text-align: right;
        color: #547878;
    }
`