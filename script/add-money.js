document.getElementById('add-money')
    .addEventListener("click", function (event) {
        event.preventDefault()
        const amount = parseFloat(document.getElementById('amount').value);
        const password = parseInt(document.getElementById('password').value)
        const initialAmount = document.getElementById('initial-amount').innerText
        const convertInitialAmount = parseFloat(initialAmount);
        const account = document.getElementById('account-number').value;


        if (password === 1234 && account.length === 11) {
            if(amount > 0){
                const sum = amount + convertInitialAmount;
            document.getElementById('initial-amount').innerText = sum;
            }
            else{
                alert('please add your amount')
            }
        }
        else {
            alert('Please Enter Your Valid Password')
        }
    })

document.getElementById('log-out').addEventListener('click', function(){
    window.location.href = 'index.html'
})
