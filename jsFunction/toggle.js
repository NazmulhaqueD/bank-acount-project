document.getElementById('add-money-box').addEventListener('click', function () {
    block('add-money-section')
    none('cash-out-section')
    none('tran-section');
})

document.getElementById('cash-out-box').addEventListener('click', function () {
    block('cash-out-section')
    none('add-money-section')
    none('tran-section');
})