document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositFieldVallueString = depositField.value;
    const depositFieldValue = parseFloat(depositFieldVallueString);

    depositField.value = '';

    if (isNaN(depositFieldValue)) {
        alert('Try with any number again');
        return;
    }


    const depositTotal = document.getElementById('deposit-total');
    const depositTextString = depositTotal.innerText;
    const depositText = parseFloat(depositTextString);
    console.log(depositFieldValue);

    const newDepositAmount = depositFieldValue + depositText;
    depositTotal.innerText = newDepositAmount;



    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalTextString = balanceTotal.innerText;
    const balanceTotalText = parseFloat(balanceTotalTextString)


    const newBalance = balanceTotalText + newDepositAmount;
    balanceTotal.innerText = newBalance;
})