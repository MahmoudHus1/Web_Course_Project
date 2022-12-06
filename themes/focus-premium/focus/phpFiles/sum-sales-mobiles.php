<?php
include "DBconnection.php";
$i = 0;
$sumTotalMobiles = 0;
$sumMobiles = 0;

$sql_1 = 'SELECT SUM(quantity),ca.name FROM order_details AS od INNER JOIN items AS i ON od.item_ID = i.ID
INNER JOIN categories AS ca ON i.cat_ID = ca.ID WHERE ca.name = "mobiles" GROUP BY ca.ID;';
$res_1 = $conn -> prepare($sql_1);
$res_1 -> execute();
$res_1 -> bind_result($sum,$cat_name);
$res_1 -> store_result();

$sql_2 = 'SELECT SUM(quantity),i.name FROM order_details AS od INNER JOIN items AS i ON od.item_ID = i.ID
INNER JOIN categories AS ca ON i.cat_ID = ca.ID WHERE ca.name = "mobiles" GROUP BY od.item_ID;';
$res_2 = $conn -> prepare($sql_2);
$res_2 -> execute();
$res_2 -> bind_result($sum,$item_name);
$res_2 -> store_result();

if ($conn -> error) {
    $myJSON = '{"status":"4"}';
    echo $myJSON;
    return 0;
}
else {
    while ($res_1 -> fetch()) {
        $sumTotalMobiles = $sum;
    }
    while ($res_2 -> fetch()) {
        $json['total'] = $sumTotalMobiles;
        $json['item_name'] = $item_name;
        $json['sum'] = $sum;
        $arr[$i] = $json;
        $i++;
    }
    $myJSON = json_encode($arr);
    echo $myJSON;
}
?>