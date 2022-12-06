<?php
include "DBconnection.php";

if (isset($_POST['name'])) {
    $name = $_POST['name'];
    
    $sql = 'SELECT name FROM items WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('s',$name);
    $res -> execute();
    $res -> bind_result($name);
    $res -> store_result();
		
    if($res -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }
    else {
        if ($res -> num_rows > 0) {
            $myJSON = '{"status":"8"}';
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