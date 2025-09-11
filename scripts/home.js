document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
    const amount = parseInt(document.getElementById('add-amount').value)

    const pin = document.getElementById('add-pin').value

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    if (accountNumber.length !== 10) {
        alert('Account number must be 10 digits')
        return
    } else if (amount < 500) {
        alert('Minimum amount to add is 500')
        return
    } else if (pin.length !== 4) {
        alert('PIN must be 4 digits')
        return
    }

    const newBalance = availableBalance + amount

    document.getElementById('available-balance').innerText = newBalance

})