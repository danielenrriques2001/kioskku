const getCurrencyFormat = (quantity: Number): String => {
    return quantity.toLocaleString('en-US', {
        style: 'currency',
        currency: 'EUR',
    })
}

export {
    getCurrencyFormat
}