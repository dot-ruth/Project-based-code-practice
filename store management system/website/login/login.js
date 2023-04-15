var login=document.getElementById("loginbtn");
var username = document.getElementById("username");
var password=document.getElementById("password");

function validate() {
    var valid=true;
     
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
    
}

