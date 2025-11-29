const validPin = 1234

const transactionData = []


// functions to get input values
function getInputValueNumber(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber
}

// function to get inner text value as number
function getInnerTextValueNumber(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
}

// function to set inner text
function setInnerText(value) {
    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value
}


// add money functionality
document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value

    const amount = getInputValueNumber("add-amount")
    const pin = getInputValueNumber("add-pin")

    const availableBalance = getInnerTextValueNumber("available-balance")

    if (bank === "Select Bank") {
        alert("Please select a bank")
        return
    }

    if (accountNumber.length < 10) {
        alert("Account number must be 10 digits")
        return
    }

    if (pin !== validPin) {
        alert("Invalid PIN")
        return
    }


    const totalNewAvailableBalance = availableBalance + amount

    setInnerText(totalNewAvailableBalance)

    const data = {
        name: "Add Money",
        date: new Date().toLocaleDateString()
    }
    transactionData.push(data)
})


// cash out functionality
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const amount = getInputValueNumber("withdraw-amount")
    const availableBalance = getInnerTextValueNumber("available-balance")

    const totalNewAvailableBalance = availableBalance - amount

    setInnerText(totalNewAvailableBalance)
    const data = {
        name: "Cashout",
        date: new Date().toLocaleDateString()
    }
    transactionData.push(data)
})

// transfer money functionality
document.getElementById("transfer-btn").addEventListener("click", function (e) {
    e.preventDefault()
})

// transactions functionality
document.getElementById("transactions-button").addEventListener("click", function (e) {
    const transactionContainer = document.getElementById("transaction-container")

    for (const data of transactionData) {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center">
                    <div class="flex items-center">
                        <div class=" p-3 rounded-full bg-[#f4f5f7]">
                            <img class="mx-auto" src="./assets/wallet1.png" alt="">
                        </div>
                        <div class="ml-3">
                            <h2>${data.name}</h2>
                            <p>${data.date}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>`
        transactionContainer.appendChild(div)
    }

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