
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var signup = document.getElementById("signupbtn")
var login = document.getElementById("loginbtn")
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');
const min = 3, max = 25;
const username = usernameEl.value.trim();
const email = emailEl.value.trim();
const password = passwordEl.value.trim();
const confirmPassword = confirmPasswordEl.value.trim();
   

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

signup.addEventListener('click', function () {
    
    if (!isRequired(username)) {
        document.getElementById("usernameerror").innerHTML='Username cannot be blank.';
    } else if (!isBetween(username.length, min, max)) {
        document.getElementById("usernameerror").innerHTML=`Username must be between ${min} and ${max} characters.`;
    } else {
        document.getElementById("usernameerror").innerHTML='Valid username';
        document.getElementById("usernameerror").style.color=green;
    }
    
    if (!isRequired(email)) {
        document.getElementById("emailerror").innerHTML='Email cannot be blank.';
    } else if (!isEmailValid(email)) {
        document.getElementById("emailerror").innerHTML='Email is not valid.';
    } else {
        document.getElementById("emailerror").innerHTML='Valid Email'
        document.getElementById("emailerror").style.color=green;
    }
    

    if (!isRequired(password)) {
        document.getElementById("passworderror").innerHTML='Password cannot be blank.';
    } else if (!isPasswordSecure(password)) {
        document.getElementById("passworderror").innerHTML='Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)';
    } else {
        document.getElementById("passworderror").innerHTML='Valid Password';
        document.getElementById("passworderror").style.color=green;
    }
    

    if (!isRequired(confirmPassword)) {
        document.getElementById("passwordmismatch").innerHTML='Please enter the password again';
    } else if (password !== confirmPassword) {
        document.getElementById("passwordmismatch").innerHTML='The password does not match';
    } else {
        document.getElementById("passwordmismatch").innerHTML='Valid Password';
        document.getElementById("passwordmismatch").style.color=green;
    }
 
});



