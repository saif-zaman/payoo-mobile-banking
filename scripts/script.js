// login button functionality
document.getElementById('loginButton').addEventListener('click', function(e) {
    e.preventDefault();
    const mobileNumber = 12345678910; // predefined mobile number
    const pinNumber = 1234; // predefined pin

    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNumberConverted = parseInt(mobileNumberValue);
    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberConverted = parseInt(pinNumberValue);

    if (mobileNumberConverted === mobileNumber && pinNumberConverted === pinNumber) {
        window.location.href = 'home.html';
    } else {
        alert('invalid credentials');
    }
});
