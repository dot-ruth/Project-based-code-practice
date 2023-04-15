var signup=document.getElementById("signupbtn");
var username = document.getElementById("username");
var email=document.getElementById("email");
var dbname=document.getElementById("dbname");
var password=document.getElementById("password");
var confirmPassword=document.getElementById("confirm-password");


function validate() {
    var valid=true;
    if (email.value==='') {
        document.getElementById("emailerror").innerHTML='Email cannot be blank.';
        valid=false;
        document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
        return valid; 
    } 
    if (username.value==='') {
        document.getElementById("usernameerror").innerHTML='Username cannot be blank.';
         valid=false;
         document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
         return valid; 
    } 
     
    

   if(password.value==='') {
        document.getElementById("passworderror").innerHTML='Password cannot be blank.';
        valid=false;
        document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
        return valid; 
    }  
    if(confirmPassword.value==='') {
        document.getElementById("passwordmismatch").innerHTML='Please enter the password again';
        valid=false;
        document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
        return valid; 
    } else if (password.value !== confirmPassword.value) {
        document.getElementById("passwordmismatch").innerHTML='The password does not match';
        valid=false;
        document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
        return valid; 
    }
    
      
    
   
}

