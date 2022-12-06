<?php
include 'DBconnection.php';

if (isset($_POST['name']) && isset($_POST['category']) && isset($_POST['brand']) &&
 isset($_POST['quantity']) && isset($_POST['price']) && ($_FILES["image"]["name"] != '')) {
    // -------------------
    $var1 = rand(1111,9999);
    $var2 = rand(1111,9999);
    $var3 = $var1.$var2;
    $var3 = md5($var3);
    $fnm = $_FILES["image"]["name"];
    $dst = "../itemsImages/".$var3.$fnm;
    $dst_db = "itemsImages/".$var3.$fnm;
    move_uploaded_file($_FILES["image"]["tmp_name"],$dst);

    $categoryID = $_POST['category'];
    $brandID = $_POST['brand'];

    if (isset($_POST['model']) && !isset($_POST['description'])) {
        $name = $_POST['name'];
        $quantity = $_POST['quantity'];
        $price = $_POST['price'];
        $model = $_POST['model'];

        $sql = 'INSERT INTO items(name,cat_ID,sub_cat_name,brand_ID,quantity,price,img) VALUES (?,?,?,?,?,?,?)';
        $res = $conn -> prepare($sql);
        $res -> bind_param('sisiiss',$name,$categoryID,$model,$brandID,$quantity,$price,$dst_db);
        $res -> execute();

        if ($res -> error) {
            $myJSON = '{"status":"4"}';
            echo $myJSON;
            return 0;
        }
        else {
            $myJSON = '{"status":"2"}';
            echo $myJSON;
            return 0;
        }
    }
    else if (isset($_POST['description']) && !isset($_POST['model'])) {
        $name = $_POST['name'];
        $quantity = $_POST['quantity'];
        $price = $_POST['price'];
        $description = $_POST['description'];

        $sql = 'INSERT INTO items(name,description,cat_ID,brand_ID,quantity,price,img) VALUES (?,?,?,?,?,?,?)';
        $res = $conn -> prepare($sql);
        $res -> bind_param('ssiiiss',$name,$description,$categoryID,$brandID,$quantity,$price,$dst_db);
        $res -> execute();

        if ($res -> error) {
            $myJSON = '{"status":"4"}';
            echo $myJSON;
            return 0;
        }
        else {
            $myJSON = '{"status":"2"}';
            echo $myJSON;
            return 0;
        }
    }
    else if (isset($_POST['model']) && isset($_POST['description'])) {
        $name = $_POST['name'];
        $quantity = $_POST['quantity'];
        $price = $_POST['price'];
        $model = $_POST['model'];
        $description = $_POST['description'];

        $sql = 'INSERT INTO items(name,description,cat_ID,sub_cat_name,brand_ID,quantity,price,img) VALUES (?,?,?,?,?,?,?,?)';
        $res = $conn -> prepare($sql);
        $res -> bind_param('ssisiiss',$name,$description,$categoryID,$model,$brandID,$quantity,$price,$dst_db);
        $res -> execute();

        if ($res -> error) {
            $myJSON = '{"status":"4"}';
            echo $myJSON;
            return 0;
        }
        else {
            $myJSON = '{"status":"2"}';
            echo $myJSON;
            return 0;
        }
    }
    else {
        $name = $_POST['name'];
        $quantity = $_POST['quantity'];
        $price = $_POST['price'];

        $sql = 'INSERT INTO items(name,cat_ID,brand_ID,quantity,price,img) VALUES (?,?,?,?,?,?)';
        $res = $conn -> prepare($sql);
        $res -> bind_param('siiiss',$name,$categoryID,$brandID,$quantity,$price,$dst_db);
        $res -> execute();

        if ($res -> error) {
            $myJSON = '{"status":"4"}';
            echo $myJSON;
            return 0;
        }
        else {
            $myJSON = '{"status":"2"}';
            echo $myJSON;
            return 0;
        }
    }
}
?>