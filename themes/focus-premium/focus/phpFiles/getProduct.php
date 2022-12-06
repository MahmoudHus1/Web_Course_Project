<?php
include "DBconnection.php";
$i = 0;

$sql = 'SELECT i.name,i.description,c.name,i.sub_cat_name,b.brand,i.price,i.img
FROM items i INNER JOIN categories c ON i.cat_ID = c.ID INNER JOIN brands b ON i.brand_ID = b.ID;';
$res = $conn -> prepare($sql);
$res -> execute();
$res -> bind_result($item_name,$description,$cat_name,$sub_cat_name,$brand_name,$price,$img);
$res -> store_result();

if ($conn -> error) {
    $myJSON = '{"status":"2"}';
    echo $myJSON;
    return 0;
}
else {
    while ($res -> fetch()) {
        $json['item_name'] = $item_name;
        $json['description'] = $description;
        $json['cat_name'] = $cat_name;
        $json['sub_cat_name'] = $sub_cat_name;
        $json['brand_name'] = $brand_name;
        $json['price'] = $price;
        $json['img'] = $img;
        $arr[$i] = $json;
        $i++;
    }
    $myJSON = json_encode($arr);
    echo $myJSON;
    return 0;
}
?>