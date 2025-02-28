document.getElementById('log-out-btn').addEventListener('click', function () {
    window.location.href = 'index.html'
})


document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const selectedBank = document.getElementById('select-bank').value;
    const addAccount = document.getElementById('add-account').value;
    const addAmount = getInputValueById('add-amount');
    const addPin = getInputValueById('add-password');
    const mainBalance = getInnerTextById('main-balance');

    if(addAccount.length === 11){
        if(addAmount > 0){
            if(addPin === 1234){
                const totalAmount = mainBalance + addAmount;
                setInnerText('main-balance', totalAmount);
                console.log(totalAmount)

                // for transaction
                const transaction = document.getElementById('tran-section');
                const div = document.createElement('div');
                div.innerHTML = `
                    <h1 class="text-red-300 text-xl">Add Money</h1>
                    <p class = "text-[coral] text-xl"> ${selectedBank} from ${addAccount}</p>
                    <h1 class = "text-green-400 text-2xl font-bold">Added: ${addAmount}</h1>
                `
                transaction.appendChild(div)
            }
            else{
                alert("Please Enter Your Valid Password")
            }
        }
        else{
            alert('Insufficient Balance or write your amount');
        }
    }
    else{
        alert('Your Account is not correct!')
    }
})