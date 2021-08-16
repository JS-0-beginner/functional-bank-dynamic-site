////// One \\\\\\\\\\
function getInputValue(inputId)
{
    
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  
  inputField.value= '';

  return amountValue;

}

//////// Two \\\\\\\\\\\\\\\\
function updateTotalField(totalFieldId, amount)
{
  // debugger;
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText; 
  const previousTotal = parseFloat(totalText);
  totalElement.innerText = previousTotal + amount;
}

/////////// another \\\\\\\\\\\\\\
function getCurrentBalance()
{
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}


////////////// Third \\\\\\\\\\\\\\\\
function updateBalance(amount, isAdd)
{
  const balanceTotal = document.getElementById('balance-total');
  /* const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText); */
  const previousBalanceTotal = getCurrentBalance();
  if(isAdd == true)
  {
    balanceTotal.innerText = previousBalanceTotal + amount;
  }
  else
  {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
  
}


/*-------------------------------------------*\
  /////////////// Deposit \\\\\\\\\\\\\\\\\\\
\*-------------------------------------------*/

document.getElementById('deposit-button').addEventListener('click',

function()

{
  const depositAmount = getInputValue('deposit-input');
  if(depositAmount > 0)
  {
    updateTotalField('total-deposit', depositAmount);
    updateBalance(depositAmount, true);
  }
  

}

);

/*------------------------------------*\
  /////////// Withdraw \\\\\\\\\\\\\
\*------------------------------------*/

document.getElementById('withdraw-button').addEventListener('click',
function()
{
  const withdrawAmount = getInputValue('withdraw-input');
  const currentBalance = getCurrentBalance();
  if(withdrawAmount > 0 && withdrawAmount < currentBalance )
  {
    updateTotalField('total-withdraw', withdrawAmount);
    updateBalance(withdrawAmount, true);
  }
  if( withdrawAmount > currentBalance )
  {
    console.log("You can't withdraw more...")
  }
}

);