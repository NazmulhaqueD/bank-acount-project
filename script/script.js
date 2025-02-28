document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault()
    const mobileNumber = document.getElementById('mobile-number').value;
    const covertMobileNumber = parseInt(mobileNumber);
    const pin = document.getElementById('pin').value;
    const convertPin = parseInt(pin);
    
    if(convertPin === 1234 && mobileNumber.length === 11){
        window.location.href= 'main.html';
    }
    else{
        alert('Wrong phone number or pin')
    }
})