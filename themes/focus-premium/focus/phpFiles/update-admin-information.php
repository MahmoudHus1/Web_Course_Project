<?php
include "DBconnection.php";

$admin = $_POST['admin'];
if(isset($_POST['username'])) {
    $username = $_POST['username'];
    $sql = 'UPDATE admin SET name = ? WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('ss',$username,$admin);
    $res -> execute();
    
    $admin = $username;
    if($conn -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }
}
if (isset($_POST['email'])) {
    $email = $_POST['email'];
    $sql = 'UPDATE admin SET email = ? WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('ss',$email,$admin);
    $res -> execute();
    
    if($conn -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }
}
if (isset($_POST['phone'])) {
    $phone = $_POST['phone'];
    $sql = 'UPDATE admin SET phone_number = ? WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('ss',$phone,$admin);
    $res -> execute();
    
    if($conn -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }
}
if (isset($_POST['password'])) {
    $pass = md5($_POST['password']);
    $sql = 'UPDATE admin SET password = ? WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('ss',$pass,$admin);
    $res -> execute();
    
    if($conn -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }
}
if (isset($_POST['permission'])) {
    $permission = $_POST['permission'];
    $sql = 'SELECT ID FROM permission WHERE text = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('s',$permission);
    $res -> execute();
    $res -> bind_result($permission_ID);
    $res -> store_result();

    $perm = 0;
    while ($res -> fetch()) {
        $perm = $permission_ID;
    }

    $sql = 'SELECT ID FROM admin WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('s',$admin);
    $res -> execute();
    $res -> bind_result($admin_ID);
    $res -> store_result();

    $adm = 0;
    while ($res -> fetch()) {
        $adm = $admin_ID;
    }

    $sql = 'UPDATE admin_permissions SET permission_ID = ? WHERE admin_ID = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('ss',$perm,$adm);
    $res -> execute();
    
    if($conn -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }
}
$myJSON = '{"status":"2"}';
echo $myJSON;
?>