<?php
include "DBconnection.php";

$itemName = $_POST['itemName'];
if(isset($_POST['newItemName'])) {
    $newItemName = $_POST['newItemName'];
    $sql = 'UPDATE items SET name = ? WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('ss',$newItemName,$itemName);
    $res -> execute();
    if($conn -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }
    $itemName = $newItemName;
}
if (isset($_POST['newModel'])) {
    $newModel = $_POST['newModel'];
    $sql = 'UPDATE items SET sub_cat_name = ? WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('ss',$newModel,$itemName);
    $res -> execute();
    
    if($conn -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }
}
if (isset($_POST['newModel'])) {
    $newModel = $_POST['newModel'];
    $sql = 'UPDATE items SET sub_cat_name = ? WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('ss',$newModel,$itemName);
    $res -> execute();
    
    if($conn -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }
}

if (isset($_POST['newQuantity'])) {
    $newQuantity = $_POST['newQuantity'];
    $sql = 'UPDATE items SET quantity = ? WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('is',$newQuantity,$itemName);
    $res -> execute();
    
    if($conn -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }
}
if (isset($_POST['newPrice'])) {
    $newPrice = $_POST['newPrice'];
    $sql = 'UPDATE items SET price = ? WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('ss',$newPrice,$itemName);
    $res -> execute();
    
    if($conn -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }
}
if (isset($_POST['newPrice'])) {
    $newPrice = $_POST['newPrice'];
    $sql = 'UPDATE items SET price = ? WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('ss',$newPrice,$itemName);
    $res -> execute();
    
    if($conn -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }
}
/*if (isset($_POST['newOffer'])) {
    $newOffer = $_POST['newOffer'];
    $sql = 'UPDATE items SET newOffer = ? WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('ss',$newOffer,$itemNam);
    $res -> execute();
    
    if($conn -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }
}*/
if (isset($_POST['newDescription'])) {
    $newDescription = $_POST['newDescription'];
    $sql = 'UPDATE items SET description = ? WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('ss',$newDescription,$itemName);
    $res -> execute();
    
    if($conn -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }
}
if (isset($_FILES["newImage"]["name"])) {
    $var1 = rand(1111,9999);
    $var2 = rand(1111,9999);
    $var3 = $var1.$var2;
    $var3 = md5($var3);
    $fnm = $_FILES["newImage"]["name"];
    $dst = "../itemsImages/".$var3.$fnm;
    $dst_db = "itemsImages/".$var3.$fnm;
    echo $fnm . ' ' . $dst . ' ' . $dst_db;
    /*move_uploaded_file($_FILES["val-new-img"]["tmp_name"],$dst);

    $sql = 'UPDATE items SET img = ? WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('ss',$dst_db,$itemNam);
    $res -> execute();
    
    if($conn -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }*/
}
/*$myJSON = '{"status":"2"}';
echo $myJSON;*/
?>