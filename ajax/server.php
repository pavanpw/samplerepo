<?php
// Database connection
$con = mysqli_connect("localhost","root","","hrui_20");

if($_POST['type'] == "insert_data"){
    // Name
    $name = $_POST['name'];
    // Email
    $email = $_POST['email'];
    // Mobile
    $mobile = $_POST['mobile'];
    // Password
    $pass = $_POST['password'];

    $insert_query = mysqli_query($con,"insert into users(name,mobile,email,password) values('$name','$email','$mobile','$pass')");

    if($insert_query){
        echo "Data inserted";
    }

}

?>