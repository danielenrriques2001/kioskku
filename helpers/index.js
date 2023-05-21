const getCurrencyFormat = (quantity) => {
    return quantity.toLocaleString('en-US', {
        style: 'currency',
        currency: 'EUR',
    })
}

export {
    getCurrencyFormat
}