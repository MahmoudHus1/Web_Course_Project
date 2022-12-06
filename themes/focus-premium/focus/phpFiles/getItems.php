<?php
include "DBconnection.php";
$i = 0;

$sql = 'SELECT * FROM items';
$res = $conn -> prepare($sql);
$res -> execute();
$res -> bind_result($ID,$name,$description,$sold_out,$cat_ID,$sub_cat_name,$brand_ID,$price
,$img,$img2,$img3,$img4,$created_at,$status);
$res -> store_result();

if ($conn -> error) {
    $myJSON = '{"status":"2"}';
    echo $myJSON;
    return 0;
}
else {
    if ($res -> num_rows > 0) {
        while ($res -> fetch()) {
            $json['id'] = $ID;
            $json['name'] = $name;
            $json['description'] = $description;
            $json['sold_out'] = $sold_out;
            $json['cat_ID'] = $cat_ID;
            $json['sub_cat_name'] = $sub_cat_name;
            $json['brand_ID'] = $brand_ID;
            $json['price'] = $price;
            $json['img'] = $img;
            $json['img2'] = $img2;
            $json['img3'] = $img3;
            $json['img4'] = $img4;
            $json['created_at'] = $created_at;
            $json['status'] = $status;
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