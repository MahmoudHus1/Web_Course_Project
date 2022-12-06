<?php
include "DBconnection.php";

$i = 0;
$sql = 'SELECT COUNT(status_ID),status_ID FROM `orders` GROUP BY status_ID;';
$res = $conn -> prepare($sql);
$res -> execute();
$res -> bind_result($count_status,$status);
$res -> store_result();

if ($conn -> error) {
    $myJSON = '{"status":"4"}';
    echo $myJSON;
    return 0;
}
else {
    if ($res -> num_rows > 0) {
        while ($res -> fetch()) {
            $json['delivery_status'] = $status;
            $json['count_status'] = $count_status;
    
            $arr[$i] = $json;
            $i++;
        }
        $myJSON = json_encode($arr);
        echo $myJSON;
        return 0;
    }
    else {
        echo '0';
        return 0;
    }
}
?>