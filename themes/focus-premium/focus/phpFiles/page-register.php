<?php
include "DBconnection.php";

$username = $_POST['username'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$password = md5($_POST['password']);
$permission = $_POST['permission'];

$sql = 'INSERT INTO admin (name,email,phone_number,password) VALUES (?,?,?,?)';
$res = $conn -> prepare($sql);
$res -> bind_param('ssss',$username,$email,$phone,$password);
$res -> execute();

$sql_1 = 'SELECT ID FROM admin WHERE name = ?';
$res_1 = $conn -> prepare($sql_1);
$res_1 -> bind_param('s',$username);
$res_1 -> execute();
$res_1 -> bind_result($admin_id);
$res_1 -> store_result();

$ID_admin = 0;
while ($res_1 -> fetch()) {
    $ID_admin = $admin_id;
}

$sql_2 = 'SELECT ID FROM permission WHERE text = ?';
$res_2 = $conn -> prepare($sql_2);
$res_2 -> bind_param('s',$permission);
$res_2 -> execute();
$res_2 -> bind_result($permission_id);
$res_2 -> store_result();

$ID_permission = 0;
while ($res_2 -> fetch()) {
    $ID_permission = $permission_id;
}

$sql_3 = 'INSERT INTO admin_permissions (admin_ID,permission_ID) VALUES (?,?)';
$res_3 = $conn -> prepare($sql_3);
$res_3 -> bind_param('ii',$ID_admin,$ID_permission);
$res_3 -> execute();

$myJSON = '{"status" : "2"}';
echo $myJSON;
?>