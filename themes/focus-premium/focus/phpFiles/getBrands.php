<?php
include "DBconnection.php";
$i = 0;

$sql = 'SELECT * FROM brands';
$res = $conn -> prepare($sql);
$res -> execute();
$res -> bind_result($ID,$brand,$icon,$status);
$res -> store_result();

if ($conn -> error) {
    $myJSON = '{"status":"2"}';
    echo $myJSON;
    return 0;
}
else {
    while ($res -> fetch()) {
        $json['ID'] = $ID;
        $json['brand'] = $brand;
        $json['icon'] = $icon;
        $json['status'] = $status;
        $arr[$i] = $json;
        $i++;
    }
    $myJSON = json_encode($arr);
    echo $myJSON;
    return 0;
}
?>