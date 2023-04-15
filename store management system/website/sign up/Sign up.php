<?php
session_start();
require_once("../connection.php");
$code=$msg="";
if(isset($_POST["signup"])){
    $email=$_POST["email"];
    $username=$_POST["username"];
    $password=$_POST["password"];
	
    $query="INSERT INTO user(email,username,password) values('$email','$username','$password')";
    $result=mysqli_query($connect,$query);
    if($result==1){
        $code=1;
        $msg= "Successfully Registered";
		header("location:../items/items.php");
           }
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Sign up</title>
    <link rel="stylesheet" href="signup.css">
    
</head>
<body>
				
				  <div class="signupFrm">
					<form action="" id="signup" class="form" method="post" >
					  <h1 class="title">Sign up</h1>
				
					  <div class="inputContainer">
						<label for="" class="label">Email</label>
						<input type="email" class="input" name="email" id="email">
						<small id="emailerror"style="color:red"></small>
					  </div>
				
					  <div class="inputContainer">
						<label for="" class="label">Username</label>
						<input type="text" class="input" name="username" id="username" >
						<small id="usernameerror"style="color:red"></small>
					  </div>
				
					  <div class="inputContainer">
						<label for="" class="label">Password</label>
						<input type="password" class="input" name="password" id="password">
						<small id="passworderror"style="color:red"></small>
					  </div>
				
					  <div class="inputContainer">
						<label for="" class="label">Confirm Password</label>
						<input type="password" class="input" name="confirm-password" id="confirm-password">
						<small id="passwordmismatch"></small>
					  </div>
                        <small id="refresh" style="color:red"></small>
                      <div style="color:green">
                        <?php
                      
                        echo $msg;
                       
                            ?>
                      </div>
				      
					 <input type="submit" class="submitBtn" value="Sign up" id="signupbtn" name="signup" onclick="return validate() ">
					
                     <a href="../login/login.php"><button type="button" class="submitBtn"id="loginbtn" style="margin:10px;">Log in </button></a>
					</form>
				  </div>


                  <script src="signup.js" ></script>
</body>
</html>