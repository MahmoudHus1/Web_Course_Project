<?php
include "DBconnection.php";
$newPass = md5("admin");

$sql = 'UPDATE admin SET password = ? WHERE name = "admin";';
$res = $conn -> prepare($sql);
$res -> bind_param('s',$newPass);
$res -> execute();
echo $newPass;
?>