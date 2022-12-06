<?php
include "DBconnection.php";
$i = 0;

$sql = 'SELECT name FROM admin';
$res = $conn -> prepare($sql);
$res -> execute();
$res -> bind_result($admin);
$res -> store_result();

if ($conn -> error) {
    $myJSON = '{"status":"2"}';
    echo $myJSON;
    return 0;
}
else {
    while ($res -> fetch()) {
        $json['admin'] = $admin;
        $arr[$i] = $json;
        $i++;
    }
    $myJSON = json_encode($arr);
    echo $myJSON;
    return 0;
}
?>