<?php
include "DBconnection.php";

if(isset($_POST['username'])) {
    $username = $_POST['username'];
    $sql = 'SELECT name FROM admin WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('s',$username);
    $res -> execute();
    $res -> bind_result($username);
    $res -> store_result();
    
    if($res -> num_rows > 0) {
        $myJSON = '{"status":"1"}';
        echo $myJSON;
        return 0;
    }
    else {
        $myJSON = '{"status":"2"}';
        echo $myJSON;
        return 0;
    }
}
else if (isset($_POST['email'])) {
    $email = $_POST['email'];
    $sql = 'SELECT email FROM admin WHERE email = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('s',$email);
    $res -> execute();
    $res -> bind_result($email);
    $res -> store_result();
    
    if($res -> num_rows > 0) {
        $myJSON = '{"status":"3"}';
        echo $myJSON;
        return 0;
    }
    else {
        $myJSON = '{"status":"2"}';
        echo $myJSON;
        return 0;
    }
}
/*else {
    $phone = $_POST['phone'];
    $sql = 'SELECT phone FROM admin WHERE email = phone';
    $res = $conn -> prepare($sql);
    $res -> bind_param('s',$phone);
    $res -> execute();
    $res -> bind_result($phone);
    $res -> store_result();
    
    if($res -> num_rows > 0) {
        $myJSON = '{"status":"7"}';
        echo $myJSON;
        return 0;
    }
    else {
        $myJSON = '{"status":"2"}';
        echo $myJSON;
        return 0;
    }
}*/
?>