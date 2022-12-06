<?php
include "DBconnection.php";

$email = $_POST['email'];
$password = md5($_POST['password']);

$sql = 'SELECT email FROM admin WHERE email = ?';
$res = $conn -> prepare($sql);
$res -> bind_param('s',$email);
$res -> execute();
$res -> bind_result($email);
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
        $sql = 'UPDATE admin SET password = ? WHERE email = ?';
        $res = $conn -> prepare($sql);
        $res -> bind_param('ss',$password,$email);
        $res -> execute();

        $myJSON = '{"status":"2"}';
        echo $myJSON;
        return 0;
    }
}
?>