/*-------------------------------*\
  /////////// Diposit \\\\\\\\\\\
\*-------------------------------*/
  //(1)Button
  document.getElementById('deposit-button').addEventListener('click',

function()
{
  //(2)input field's value
  const depositAmount = document.getElementById('deposit-amount');
  const getDepositAmount = depositAmount.value;
  // console.log(getDepositAmount); //Test

  //(3)Connect (2) to Display field's result 
  const currentDeposit = document.getElementById('current-deposit');
  const currentDepositInfo = currentDeposit.innerText; 
  // currentDeposit.innerText = getDepositAmount; //result

  //(4)adding new continuous input field's value to previous Display field's result
  currentDeposit.innerText = parseFloat(currentDepositInfo) + parseFloat(getDepositAmount);


  //Clear input field
  depositAmount.value= '';

}

);