<?php
include "DBconnection.php";

$i = 0;
$sql = 'SELECT a.name,a.email,a.phone_number,p.text FROM admin_permissions AS ap
INNER JOIN admin AS a ON ap.admin_ID = a.ID
INNER JOIN permission AS p ON ap.permission_ID = p.ID;';
$res = $conn -> prepare($sql);
$res -> execute();
$res -> bind_result($name,$email,$phone,$permission);
$res -> store_result();

if ($conn -> error) {
    $myJSON = '{"status":"4"}';
    echo $myJSON;
    return 0;
}
else {
    while ($res -> fetch()) {
        $json['name'] = $name;
        $json['email'] = $email;
        $json['phone'] = $phone;
        $json['permission'] = $permission;

        $arr[$i] = $json;
        $i++;
    }
    $myJSON = json_encode($arr);
    echo $myJSON;
    return 0;
}
?>