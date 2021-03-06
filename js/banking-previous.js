/*-------------------------------------------------------------------------------*\
  ////////////////// Bank Page Without Function \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/

// console.log('added bank page'); //Test

/*-------------------------------*\
  /////////// Diposit \\\\\\\\\\\
\*-------------------------------*/
//(1)Button
document.getElementById('deposit-button').addEventListener('click',

function()
{
  //(2)input field's value
  const depositAmount = document.getElementById('deposit-amount');
  const getDepositAmountText = depositAmount.value;
  // console.log(getDepositAmountText); //Test

  //(2-i)change the input field's value to float-number
  getDepositAmount = parseFloat(getDepositAmountText);


  //(3)Connect (2) to Display field's result 
  const currentDeposit = document.getElementById('current-deposit');
  const getCurrentDepositText = currentDeposit.innerText; 
  // currentDeposit.innerText = getDepositAmountText; //result

  //(3-i)change the Display field's result to float-number
  getCurrentDeposit = parseFloat(getCurrentDepositText);

  //(4)adding new continuous input field's value to previous Display field's result

  currentDeposit.innerText = getCurrentDeposit + getDepositAmount;

  //(5)Update Deposit in Balance
  const currentBalance = document.getElementById('current-balance');
  const currentBalanceText = currentBalance.innerText;
  const previousBalance = parseFloat(currentBalanceText);

  currentBalance.innerText = previousBalance + getDepositAmount;
  


  //(3-ii)Clear input field
  depositAmount.value= '';

}

)
/*------------------------------------*\
  /////////// Withdraw \\\\\\\\\\\\\
\*------------------------------------*/

//(1)Button Event Handler
document.getElementById('withdraw-button').addEventListener('click',

function()
{
  // console.log('withdraw button clicked'); //Test

  //(2)input field's value
  const withdrawAmount = document.getElementById('withdraw-amount');
  const getWithdrawAmountText = withdrawAmount.value;
  // console.log(getWithdrawAmountText); //Test

  //(2-i)change the input field's value to float-number
  const getWithdrawAmount = parseFloat(getWithdrawAmountText);

  //(3)Connect (2) to Display field's result 
  const currentWithdraw = document.getElementById('current-withdraw');
  const getCurrentWithdrawText = currentWithdraw.innerText;
  // console.log(getCurrentWithdrawText); //Test
  currentWithdraw.innerText = getWithdrawAmount; //result

  //(3-i)change the Display field's result to float-number
  const getCurrentWithdraw = parseFloat(getCurrentWithdrawText);

  //(4)Subtracting new continuous input field's value to previous Display field's result
  currentWithdraw.innerText = getCurrentWithdraw + getWithdrawAmount;

  //(5)Update Withdraw in Balance
  const currentBalance = document.getElementById('current-balance');
  const currentBalanceText = currentBalance.innerText;
  const previousBalance = parseFloat(currentBalanceText);

  currentBalance.innerText = previousBalance - getWithdrawAmount;

  //(3-ii)Clear input field
  withdrawAmount.value = '';

}

)


