<?php
session_start();
require_once("../connection.php");
$msg="";
if(isset($_POST["additembtn"])){
    $name=$_POST["itemname"];
    $SN=$_POST["serialnumber"];
    
    $query="INSERT INTO items(Name,SN) values('$name','$SN')";
    $result=mysqli_query($connect,$query);
    if($result==1){
        $_SESSION["itemn"]=$name;
        $_SESSION["Serial#"]=$SN;
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
    <title>Add Items</title>
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
					  <h1 class="title">Add items</h1>
				
					  <div class="inputContainer">
						<label for="" class="label">Item Name</label>
						<input type="text" class="input" name="itemname" id="itemname">
						<small id="itemnameerror"style="color:red"></small>
					  </div>
				
					  <div class="inputContainer">
						<label for="" class="label">Serial Number</label>
						<input type="text" class="input" name="serialnumber" id="serialnumber" >
						<small id="serialnumbererror"style="color:red"></small>
					  </div>
				
					  
                        <small id="refresh" style="color:red"></small>
                      <div style="color:green">
                        <?php
echo $msg;

?>
                      </div>
				      
					 <input type="submit" class="submitBtn" value="Add Item" id="additembtn" name="additembtn" onclick="return validate() ">
           <a href="items.php"><button type="button" class="submitBtn"id="backtoitem" style="margin:10px;">Go Back </button></a>
                     
					</form>
</div>
</div>
<script>
   function validate() {
    var valid=true;
    if (document.getElementById("itemname").value==='') {
        document.getElementById("itemnameerror").innerHTML='Please fill out the item name';
        valid=false;
        document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
        return valid; 
    } 
    if (document.getElementById("serialnumber").value==='') {
        document.getElementById("serialnumbererror").innerHTML='Serial Number Field Cannot be Empty';
         valid=false;
         document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
         return valid; 
    } 
   
}
     
</script>
</body>
</html>