<?php
include "DBconnection.php";


$i = 0;
$sql = 'SELECT CONCAT(i.name,"(",od.quantity,")"),od.order_ID FROM order_details AS od
INNER JOIN orders AS o ON od.order_ID = o.ID
INNER JOIN items AS i ON od.item_ID = i.ID;';
$res = $conn -> prepare($sql);
$res -> execute();
$res -> bind_result($order_details,$id);
$res -> store_result();

if ($conn -> error) {
    $myJSON = '{"status":"4"}';
    echo $myJSON;
    return 0;
}
else {
    $details = '';
    while ($res -> fetch()) {
        echo $order_details . ' ' . $id;
    }
    echo $details;
    return 0;
}
?>