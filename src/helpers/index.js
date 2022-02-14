export const calcTipPerPerson = (billAmount, guestNumber, tipPercentage = null) => (
    ((billAmount * (tipPercentage / 100)) / guestNumber).toFixed(2)
)

export const calcTotalPerPerson = (billAmount, guestNumber, tipPercentage = null) => (
    ((billAmount / guestNumber) + (billAmount * (tipPercentage / 100) / guestNumber)).toFixed(2)
)