/*----------------------------------------------------------------------*\
  //////////////////////// Function Demo \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*----------------------------------------------------------------------*/

/* 
function doubleTheNumber(number)
{
    const result = number *2;
    return result;
}
const result = doubleTheNumber(7);
const result = doubleTheNumber(5); 
*/

function getInputValue(inputId)
{
    
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amount = parseFloat(inputAmountText);
  
  inputField.value= '';

  return amount;

}

function updateTotalField(totalField, amount)
{
  debugger;
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText; 
  
  const previousTotal = parseFloat(totalText);

  totalElement.innerText = previousTotal + amount;
}

function updateBalance()
{
  const currentBalance = document.getElementById('current-balance');
  const currentBalanceText = currentBalance.innerText;
  const previousBalance = parseFloat(currentBalanceText);

  currentBalance.innerText = previousBalance + getDepositAmount;
  
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
  updateTotalField('withdraw-amount', withdrawAmount)



}

)