/////////// Log in Page \\\\\\\\\\\\\\\\\\\

document.getElementById('login-button').addEventListener('click',

function()
{
    //For email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);

    //For password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);

    if(userEmail == 'abc@mail.com' && userPassword == 'secret')
    {
        window.location.href = 'bank.html';
    }
    else
    {
        document.getElementById('error').style.display="block";
    }
    
}

)


