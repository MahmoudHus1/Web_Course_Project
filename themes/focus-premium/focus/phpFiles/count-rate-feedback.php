<?php
include "DBconnection.php";
$i = 0;
$sql = 'SELECT COUNT(*),rate FROM customer_feedback GROUP BY rate';
$res = $conn -> prepare($sql);
$res -> execute();
$res -> bind_result($count,$rate);
$res -> store_result();

if ($conn -> error) {
    $myJSON = '{"status":"4"}';
    echo $myJSON;
    return 0;
}
else {
    while ($res -> fetch()) {
        $json['rate'] = $rate;
        $json['count'] = $count;
        $arr[$i] = $json;
        $i++;
    }
    $myJSON = json_encode($arr);
    echo $myJSON;
}
?>