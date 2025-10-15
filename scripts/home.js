// add money functionality
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

// cash out functionality
document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const amount = parseInt(document.getElementById('withdraw-amount').value)
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    const totalNewAvailableBalance = availableBalance - amount

    document.getElementById('available-balance').innerText = totalNewAvailableBalance
})




// function to toggle
function handleToggle(id) {
    const forms = document.getElementsByClassName("form")

    for (const form of forms) {
        form.style.display = "none"
    }

    document.getElementById(id).style.display = "block"
}

// function to toggle buttons
function handleButtonToggle(id) {
    const formBtns = document.getElementsByClassName("form-btn")

    for (const btn of formBtns) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-gray-300")

    }

    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
}


// toggling feature

document.getElementById("add-button").addEventListener("click", function () {
    handleToggle("add-money-parent")

    handleButtonToggle("add-button")


})

document.getElementById("cash-out-button").addEventListener("click", function () {
    handleToggle("cash-out-parent")
    handleButtonToggle("cash-out-button")
})

document.getElementById("transfer-money-button").addEventListener("click", function () {
    handleToggle("transfer-money-parent")
    handleButtonToggle("transfer-money-button")
})


document.getElementById("bonus-button").addEventListener("click", function () {
    handleToggle("bonus-parent")
    handleButtonToggle("bonus-button")

})


document.getElementById("pay-bill-button").addEventListener("click", function () {
    handleToggle("pay-bill-parent")
    handleButtonToggle("pay-bill-button")
})


document.getElementById("transactions-button").addEventListener("click", function () {
    handleToggle("transactions-parent")
    handleButtonToggle("transactions-button")

})