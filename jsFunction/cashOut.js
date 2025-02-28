document.getElementById("cash-out-btn").addEventListener('click', function (event) {
    event.preventDefault()
    const selectedBank = document.getElementById('select-bank')
    const cashOutAccount = document.getElementById('cash-out-account').value;
    const cashOutAmount = getInputValueById('cash-out-amount');
    const cashOutPin = getInputValueById('cash-out-password');
    const mainBalance = getInnerTextById('main-balance');

    // console.log(cashOutAccount, cashOutAmount, cashOutPin, mainBalance)
    if(cashOutAccount.length === 11){
        if(cashOutAmount < mainBalance && cashOutAmount > 0){
            if(cashOutPin === 1234){
                const totalAmount = mainBalance - cashOutAmount;
                setInnerText('main-balance', totalAmount)

                // for transaction
                const transaction = document.getElementById('tran-section');
                console.log(transaction)
                const div = document.createElement('div');
                div.innerHTML = `
                    <h1 class="text-blue-500 text-2xl">Cash Out</h1>
                    <p class = "text-[coral] text-xl"> ${selectedBank} from ${cashOutAccount}</p>
                    <h1 class = "text-red-500 text-2xl font-bold">Cash Out: ${cashOutAmount}</h1>
                `
                transaction.appendChild(div)
            }
            else{
                alert('Please Enter Your Valid Password!')
            }
        }
        else{
            alert('Insufficient Balance or Type Your Valid Amount')
        }
    }
    else{
        alert('Please type your correct account number!')
    }
})