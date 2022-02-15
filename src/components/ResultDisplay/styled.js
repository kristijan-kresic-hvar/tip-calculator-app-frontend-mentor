import styled from '@emotion/styled'

export const StyledResultScreen = styled.div`
    padding: 40px;
    @media (max-width: 500px) {
        padding: 37px 22px;
    }

    .tip__amount, .total {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .total {
        margin-top: 41px;
        @media (max-width: 500px) {
            margin-top: 18px;
        }
    }

    .tip__amount h2, .total h2 {
        font-family: Space Mono;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
    }

    .tip__amount small, .total small {
        font-family: Space Mono;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 19px;
        color: #7F9D9F;
    }

    .tip__amount__result, .total__result {
        font-family: Space Mono;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 71px;
        text-align: right;
        letter-spacing: -1px;
        color: #26C2AE;
        @media (max-width: 500px) {
            font-size: 32px;
        }
    }

    .reset {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 40px;
        width: calc(100% - 80px);
    }

    .reset button {
        width: 100%;
        background: #26C2AE;
        border-radius: 5px;
        border: none;
        padding: 10px 0;
        font-family: Space Mono;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #00474B;
        text-transform: uppercase;
        cursor: pointer;
        transition: background-color 200ms ease;

        &:hover {
            background-color: #9FE8DF;
        }
    }

    .reset button.disabled {
        background: #0D686D;
        font-family: Space Mono;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #00474B;
        mix-blend-mode: normal;
        opacity: 0.35;
        user-select: none;
        pointer-events: none;
    }
`