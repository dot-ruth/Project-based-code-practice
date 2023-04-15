<?php
session_start();
require_once("connection.php");
$msg="";
if(isset($_POST["addbtn"])){
    $name=$_POST["name"];
    $email=$_POST["email"];
    $FD=$_POST["feedback"];
    
    
    $query="INSERT INTO contact_us values('$name','$email','$FD')";
    $result=mysqli_query($connect,$query);
    if($result==1){
        
        $msg= "Thank You For Your Feedback";
           }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="customers/Customers.css">
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

<div class="sidenav">
            <div class="logo"><i class="fa fa-shopping-cart"></i><a href="../homepage/homepage.php" ><strong>STORIT</strong></a></div>
            
                <a href="items/Items.php">Items</a>
                <a href="orders/orders.php">Sales orders</a>
                <a href="customers/customers.php">Customers</a>
                <a href="payment recieved/payment_rev.php">Payments Received</a>
                <a href="payment made/payment_made.php">Payments Made</a>
                <a href="returns/return.php">Returns</a>
                <a href="purchase order/purchase_order.php">Purchase Order</a>
                <a href="bills/bills.php">Bills</a>
                <a href="contact.php">Contact Us</a>
                <a href="logout.php">Log out</a>
          </div>
<div >
    <div class="signupFrm "  >
<form action="" id="additemsform" class="form" method="post" >
					  <h1 class="title">Contact Us</h1>
				
					  <div class="inputContainer">
						<label for="" class="label">Full Name</label>
						<input type="text" class="input" name="name" id="name">
						<small id="nameerror"style="color:red"></small>
					  </div>
				
					  <div class="inputContainer">
						<label for="" class="label">Email</label>
						<input type="text" class="input" name="email" id="email" >
						<small id="emailerror"style="color:red"></small>
					  </div>
				

            <div class="inputContainer">
						<label for="" class="label">FeedBack</label>
						<textarea type="text" class="input" name="feedback" id="feedback" ></textarea>
						<small id="FDerror"style="color:red"></small>
					  </div>
					  
                      

                        <small id="refresh" style="color:red"></small>
                      <div style="color:green">
                        <?php
echo $msg;

?>
                      </div>
				      
					 <input type="submit" class="submitBtn" value="Add" id="addbtn" name="addbtn" onclick="return validate() ">
           
                     
					</form>
</div>
</div>
<script>
   function validate() {
    var valid=true;
    if (document.getElementById("name").value==='') {
        document.getElementById("nameerror").innerHTML='This Field Cannot be Empty';
        valid=false;
        document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
        return valid; 
    } 
    if (document.getElementById("email").value==='') {
        document.getElementById("emailerror").innerHTML='This Field Cannot be Empty';
         valid=false;
         document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
         return valid; 
    } 

    if (document.getElementById("feedback").value==='') {
        document.getElementById("FDerror").innerHTML='This Field Cannot be Empty';
         valid=false;
         document.getElementById("refresh").innerHTML='Please Refresh the page and fill out the form Again'; 
         return valid; 
    }

    
   
}
     
</script>
</body>
</html>