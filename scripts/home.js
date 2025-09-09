document.getElementById('add-money-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = document.getElementById('add-amount').value;
    
    const amount = parseInt(addAmount);
    const pin = document.getElementById('add-pin').value;


    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    

    const newBalance = availableBalance + amount;

    document.getElementById('available-balance').innerText = newBalance;
})