<?php
include "DBconnection.php";
$i = 0;

$sql = 'SELECT c.name, i.name FROM items i INNER JOIN categories c WHERE i.cat_ID = c.ID';
$res = $conn -> prepare($sql);
$res -> execute();
$res -> bind_result($cat_name,$item_name);
$res -> store_result();

if ($conn -> error) {
    $myJSON = '{"status":"2"}';
    echo $myJSON;
    return 0;
}
else {
    while ($res -> fetch()) {
        $json['cat_name'] = $cat_name;
        $json['item_name'] = $item_name;
        $arr[$i] = $json;
        $i++;
    }
    $myJSON = json_encode($arr);
    echo $myJSON;
    return 0;
}
?>