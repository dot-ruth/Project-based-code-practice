<?php
session_start();
require_once("../connection.php");
if($_SESSION["status"]!="login"){
    header("location:../login/login.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bills</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
	<link rel="stylesheet" href="../customers/Customers.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        #bills:hover{
    border:2px solid white;
    cursor:pointer;
    border-radius:5px;
}
        </style>
</head>
<body>
    

<div class="sidenav">
            <div class="logo"><i class="fa fa-shopping-cart"></i><a href="../homepage/homepage.php" ><strong>STORIT</strong></a></div>
            
                <a href="../items/Items.php">Items</a>
                <a href="../orders/orders.php">Sales orders</a>
                <a href="../customers/customers.php">Customers</a>
                <a href="../payment recieved/payment_rev.php">Payments Received</a>
                <a href="../payment made/payment_made.php">Payments Made</a>
                <a href="../returns/return.php">Returns</a>
                <a href="../purchase order/purchase_order.php">Purchase Order</a>
                <a href="../bills/bills.php">Bills</a>
                <a href="../contact.php">Contact Us</a>
                <a href="../logout.php">Log out</a>
          </div>

          <div class="main">
    <table border="2" width="100%">
        <th colspan="6" style="text-align: center;">All Bills
        <a href="addbills.php"><input id="bills" type="submit" value="Add  Bill Detail" name="addbills" 
       
       style="margin-left:20px;
       color:white;
       background-color:#1a59fc;
       
       " ></a>
    </th>
        <tr>
           
                <th>Date</th>
                <th>Bill#</th>
                <th>Reference#</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Amount</th>
               
           
        </tr>
        <tbody id="tb">
                <?php
                 
                $result =   mysqli_query($connect,"SELECT * FROM bills");
                if($result->num_rows>0){

                    while($val  =   $result->fetch_assoc()){
                          ?>
                    <tr>
                        
                        
                        <td><?php echo $val["date"]; ?></td>
                        
                        <td><?php echo $val["bill#"]; ?></td>

                        <td><?php echo $val["reference#"]; ?></td>

                        <td><?php echo $val["status"]; ?></td>

                        <td><?php echo $val["duedate"]; ?></td>

                        <td><?php echo $val["amount"]; ?></td>

                        
                        
                    </tr>
                    <?php
                    }
                }else{ ?>
                <tr>
                    <td colspan="6" class="bg-light text-center"><strong>No Record(s) Found!</strong></td>
                </tr>
                <?php } ?>
            </tbody>
    </table>
</div>
</body>
</html>