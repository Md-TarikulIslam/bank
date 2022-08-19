document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValueString = withdrawField.value;
    const withdrawFieldValue = parseFloat(withdrawFieldValueString);
    withdrawField.value = '';

    if (isNaN(withdrawFieldValue)) {
        alert('Try with any number again');
        return;
    }


    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalTextString = withdrawTotal.innerText;
    const withdrawTotalText = parseFloat(withdrawTotalTextString);
    console.log(withdrawTotalText)






    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalTextString = balanceTotal.innerText;
    const balanceTotalText = parseFloat(balanceTotalTextString);

    if (withdrawFieldValue > balanceTotalText) {
        alert('Fill again')
        return;
    }

    const newWithdrawAmount = withdrawTotalText + withdrawFieldValue;
    withdrawTotal.innerText = newWithdrawAmount;

    const newBalance = balanceTotalText - withdrawTotalText;
    balanceTotal.innerText = newBalance;





})