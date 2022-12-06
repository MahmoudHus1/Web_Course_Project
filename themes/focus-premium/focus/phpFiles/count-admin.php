<?php
include "DBconnection.php";
$i = 0;
$sql = 'SELECT COUNT(*) FROM admin';
$res = $conn -> prepare($sql);
$res -> execute();
$res -> bind_result($count);
$res -> store_result();

if ($conn -> error) {
    $myJSON = '{"status":"4"}';
    echo $myJSON;
    return 0;
}
else {
    while ($res -> fetch()) {
        $json['count'] = $count;
        $arr[$i] = $json;
        $i++;
    }
    $myJSON = json_encode($arr);
    echo $myJSON;
}
?>