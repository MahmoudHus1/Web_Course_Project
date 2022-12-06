<?php
include "DBconnection.php";
$i = 0;
$sql = 'SELECT text FROM permission;';
$res = $conn -> prepare($sql);
$res -> execute();
$res -> bind_result($permission);
$res -> store_result();
if ($conn -> error) {
    $myJSON = '{"status" : "4"}';
    echo $myJSON;
    return 0;
}
else {
    while ($res -> fetch()) {
        $json['permission'] = $permission;
        $arr[$i] = $json;
        $i++;
    }
    $myJSON = json_encode($arr);
    echo $myJSON;
}
?>