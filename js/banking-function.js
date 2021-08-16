/* 
function doubleTheNumber(number)
{
    const result = number *2;
    return result;
}
const result = doubleTheNumber(7);
const result = doubleTheNumber(5); 
*/

function getInputValue()
{
    //(2)input field's value
  const depositAmount = document.getElementById('deposit-amount');
  const getDepositAmountText = depositAmount.value;
  // console.log(getDepositAmountText); //Test

  //(2-i)change the input field's value to float-number
  getDepositAmount = parseFloat(getDepositAmountText);

  //(3-ii)Clear input field
  depositAmount.value= '';

  return depositAmount;

}

// Event Handler
document.getElementById('deposit-button').addEventListener('click',

function()
{
    depositAmount = getInputValue(); //Deposit-Button
    
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
  
}

)