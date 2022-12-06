<?php
include 'DBconnection.php';

if (isset($_POST['brand'])) {
    $name = $_POST['brand'];
    $sql = 'INSERT INTO brands(brand,status) VALUES (?,1)';
    $res = $conn -> prepare($sql);
    $res -> bind_param('s',$name);
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
?>