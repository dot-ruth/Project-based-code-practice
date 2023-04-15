<?php
session_start();
require_once("../connection.php");
$msg="";
if(isset($_POST["addbtn"])){
    $date=$_POST["date"];
    $bill=$_POST["payment"];
    $reference=$_POST["reference"];
    $status=$_POST["status"];
    $duedate=$_POST["duedate"];
    $amount=$_POST["amount"];
    
    $query="INSERT INTO bills values('$date','$bill','$reference','$status','$duedate','$amount')";
    $result=mysqli_query($connect,$query);
    if($result==1){
        
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
    <title>Add Bills</title>
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
    margin-top: 200px;
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
					  <h1 class="title">Add Bills</h1>
				
					  <div class="inputContainer">
						<label for="" class="label">Date</label>
						<input type="date" class="input" name="date" id="date">
						<small id="dateerror"style="color:red"></small>
					  </div>
				
					  <div class="inputContainer">
						<label for="" class="label">Bill#</label>
						<input type="text" class="input" name="payment" id="payment" >
						<small id="paymenterror"style="color:red"></small>
					  </div>
				

                     <div class="inputContainer">
						<label for="" class="label">Reference#</label>
						<input type="text" class="input" name="reference" id="reference" >
						<small id="referenceerror"style="color:red"></small>
					  </div>

                      <div class="inputContainer">
						<label for="" class="label">Status</label>
						<input type="text" class="input" name="status" id="status"  >
						<small id="statuserror"style="color:red"></small>
					  </div>
					  
                      <div class="inputContainer">
						<label for="" class="label">Due Date</label>
						<input type="date" class="input" name="duedate" id="duedate">
						<small id="duedateerror"style="color:red"></small>
					  </div>

                      <div class="inputContainer">
						<label for="" class="label">Amount</label>
						<input type="number" class="input" name="amount" id="amount" >
						<small id="amounterror"style="color:red"></small>
					  </div>

                        <small id="refresh" style="color:red"></small>
                      <div style="color:green">
                        <?php
echo $msg;

?>
                      </div>
				      
					 <input type="submit" class="submitBtn" value="Add" id="addbtn" name="addbtn" onclick="return validate() ">
           <a href="bills.php"><button type="button" class="submitBtn"id="backtoorder" style="margin:10px;">Go Back </button></a>
                     
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
    if (document.getElementById("payment").value==='') {
        document.getElementById("paymenterror").innerHTML='This Field Cannot be Empty';
         valid=false;
         document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
         return valid; 
    } 

    if (document.getElementById("reference").value==='') {
        document.getElementById("referenceerror").innerHTML='This Field Cannot be Empty';
         valid=false;
         document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
         return valid; 
    }

    if (document.getElementById("status").value==='') {
        document.getElementById("statuserror").innerHTML='This Field Cannot be Empty';
         valid=false;
         document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
         return valid; 
        }

        if (document.getElementById("duedate").value==='') {
        document.getElementById("duedateerror").innerHTML='Please fill out the Date ';
        valid=false;
        document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
        return valid; 
    } 

    if (document.getElementById("amount").value==='') {
        document.getElementById("amounterror").innerHTML='This Field Cannot be Empty';
         valid=false;
         document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
         return valid; 
    }
   
}
     
</script>
</body>
</html>