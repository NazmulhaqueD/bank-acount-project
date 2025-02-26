document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const cashOutAmount = document.getElementById('cashout-amount').value;
    const convertCashOutAmount = parseFloat(cashOutAmount);
    const mainBalance = document.getElementById('initial-amount').innerText;
    const convertMainBalance = parseFloat(mainBalance);
    const cashOutPIn = document.getElementById('cashout-password').value;
    const convertCashOutPin = parseInt(cashOutPIn);

    if (convertCashOutPin === 1234) {
        if (convertMainBalance > convertCashOutAmount) {
            const sum = convertMainBalance - convertCashOutAmount;
            document.getElementById('initial-amount').innerText = sum;
        }
        else{
            alert('Insufitiant balance')
        }
    }
    else {
        alert('Your password is wrong');
    }
})