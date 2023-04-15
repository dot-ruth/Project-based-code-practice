<?php
session_start();
require_once("../connection.php");
$code="";
if(isset($_POST["login"])){
    $username=$_POST["username"];
    $password=$_POST["password"];
    $query="select * from user";
    $result=mysqli_query($connect,$query);
    while($row=mysqli_fetch_assoc($result)){
        if($row["username"]==$username && $row["password"]==$password){
            $_SESSION["username"]=$username;
            $_SESSION["status"]="login";
            header("location:../items/items.php");
        }
        else{
            $code="invalid login details";
        }
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Log in</title>
    <link rel="stylesheet" href="../sign up/signup.css">
</head>
<body>
					
				 
				  <div class="signupFrm">
					
					<form action="" id="signup" class="form" method="post">
					  <h1 class="title">Log in</h1>
		
				      <div style="color:red;margin:10px;"><?php
if($code!=""){echo $code;}
?></div>
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
					  <small id="refresh" style="color:red"></small>
					  
				       
                      
					 <div><input type="submit" name="login"class="submitBtn" value="Log in" id="loginbtn" onclick="return validate()" style="margin:20px;"></div>
					 <div>
					 <a href="../sign up/Sign up.php" style="text-decoration:none;text-align:center;">Don't have an account,Sign up here</a> 
</div>
					</form>
				  </div>
				  <script src="login.js" ></script>
</body>
</html>
				