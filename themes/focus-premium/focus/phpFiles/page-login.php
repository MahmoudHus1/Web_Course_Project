<?php
include "DBconnection.php";

$email = $_POST['email'];
$password = md5($_POST['password']);
$pass;

$sql = 'SELECT email,password FROM admin WHERE email = ?';
$res = $conn -> prepare($sql);
$res -> bind_param('s',$email);
$res -> execute();
$res -> bind_result($email,$pass);
$res -> store_result();

if ($conn -> error) {
    $myJSON = '{"status":"4"}';
    echo $myJSON;
    return 0;
}
else {
    if ($res -> num_rows == 0) {
        $myJSON = '{"status":"5"}';
        echo $myJSON;
        return 0;
    }
    else {
        while($res -> fetch()) {
            $pass = $pass;
        }
        if ($password != $pass) {
            $myJSON = '{"status":"6"}';
            echo $myJSON;
            return 0;
        }
        else {
            $myJSON = '{"status":"2"}';
            echo $myJSON;
            return 0;
        }
    }
}
?>