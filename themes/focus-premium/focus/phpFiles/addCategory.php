<?php
include 'DBconnection.php';

if (isset($_POST['category'])) {
    $name = $_POST['category'];
    $status = 1;
    $sql = 'INSERT INTO categories(name,status) VALUES (?,?)';
    $res = $conn -> prepare($sql);
    $res -> bind_param('si',$name,$status);
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