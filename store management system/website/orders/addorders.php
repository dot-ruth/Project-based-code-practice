<?php
session_start();
require_once("../connection.php");
$msg="";
if(isset($_POST["addorderbtn"])){
    $date=$_POST["date"];
    $SO=$_POST["sales-order"];
    $CN=$_POST["customer-name"];
    
    $query="INSERT INTO orders values('$date','$SO','$CN')";
    $result=mysqli_query($connect,$query);
    if($result==1){
        $_SESSION["date"]=$date;
        $_SESSION["sales-order#"]=$SO;
        $_SESSION["customer-name"]=$CN;
        $msg= "Successfully Registered";
           }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add orders</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>

html{
    width: 100%;
    height: 100%;
}
body{
    font-family: poppins;
    background-color: beige;
    
}
    .signupFrm {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .form {
    overflow-y: auto;
    background-color: beige;
    width: 400px;
    border-radius: 8px;
    margin-top: -100px;
    padding: 20px 40px;
    box-shadow: 0 10px 25px rgba(92, 99, 105, .2);
  }
  
  .title {
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 20px;
  }
  .label{
    display: block;
    color: #777;
    margin-bottom: 5px;
  }
  .inputContainer {
    margin-bottom: 17px;
  }
  .input {
    border: solid 2px beige;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 5px;
    font-size: 14px;
    display: block;
    width: 100%;
  }
  .input:focus{
    outline: none;
  }
  small{
    color: red;
  }
 
  .submitBtn {
    display: inline-block;
    margin: auto;
    text-decoration: none;
    padding: 15px 30px;
    border: none;
    background-color: #1a59fc;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 30px;
    margin-left: 0px;
    border-radius: 20px;
  }
  
  .submitBtn:hover {
    background-color: #5081fe;
    border: 2px solid white;
    
    transform: translateY(-2px);
  }
}
    </style>
</head>
<body>
<div >
    <div class="signupFrm "  >
<form action="" id="additemsform" class="form" method="post" >
					  <h1 class="title">Add Purchase Order</h1>
				
					  <div class="inputContainer">
						<label for="" class="label">Date</label>
						<input type="date" class="input" name="date" id="date">
						<small id="dateerror"style="color:red"></small>
					  </div>
				
					  <div class="inputContainer">
						<label for="" class="label">Sales-order#</label>
						<input type="text" class="input" name="sales-order" id="sales-order" >
						<small id="SOerror"style="color:red"></small>
					  </div>
				

            <div class="inputContainer">
						<label for="" class="label">Customer Name</label>
						<input type="text" class="input" name="customer-name" id="customername" >
						<small id="CNerror"style="color:red"></small>
					  </div>
					  
                        <small id="refresh" style="color:red"></small>
                      <div style="color:green">
                        <?php
echo $msg;

?>
                      </div>
				      
					 <input type="submit" class="submitBtn" value="Add Order" id="addorderbtn" name="addorderbtn" onclick="return validate() ">
           <a href="orders.php"><button type="button" class="submitBtn"id="backtoorder" style="margin:10px;">Go Back </button></a>
                     
					</form>
</div>
</div>
<script>
   function validate() {
    var valid=true;
    if (document.getElementById("date").value==='') {
        document.getElementById("dateerror").innerHTML='Please fill out the Date ';
        valid=false;
        document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
        return valid; 
    } 
    if (document.getElementById("sales-order").value==='') {
        document.getElementById("SOerror").innerHTML='Sales Order Field Cannot be Empty';
         valid=false;
         document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
         return valid; 
    } 

    if (document.getElementById("customername").value==='') {
        document.getElementById("CNerror").innerHTML='Customer Name Field Cannot be Empty';
         valid=false;
         document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
         return valid; 
    }
   
}
     
</script>
</body>
</html>