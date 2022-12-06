<?php
include "DBconnection.php";

    $phone = $_POST['phone'];
    $sql = 'SELECT phone_number FROM admin WHERE phone_number = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('s',$phone);
    $res -> execute();
    $res -> bind_result($phone);
    $res -> store_result();
    
    if($res -> num_rows > 0) {
        $myJSON = '{"status":"7"}';
        echo $myJSON;
        return 0;
    }
    else {
        $myJSON = '{"status":"2"}';
        echo $myJSON;
        return 0;
    }
?>