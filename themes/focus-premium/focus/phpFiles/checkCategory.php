<?php
include "DBconnection.php";

$categoryID;

if (isset($_POST['category'])) {
    $category = $_POST['category'];
    $i = 0;

    $sql = 'SELECT ID FROM categories WHERE name = ?';
    $res = $conn -> prepare($sql);
    $res -> bind_param('s',$category);
    $res -> execute();
    $res -> bind_result($ID);
    $res -> store_result();
		
    if($res -> error) {
        $myJSON = '{"status":"4"}';
        echo $myJSON;
        return 0;
    }
    else {
        if ($res -> num_rows > 0) {
            while ($res -> fetch())  {
                $categoryID = $ID;
            }
        }
        else {
            $sql = 'INSERT INTO categories(name) VALUES (?)';
            $res = $conn -> prepare($sql);
            $res -> bind_param('s',$category);
            $res -> execute();
            
            $sql = 'SELECT ID FROM categories WHERE name = ?';
            $res = $conn -> prepare($sql);
            $res -> bind_param('s',$category);
            $res -> execute();
            $res -> bind_result($ID);
            $res -> store_result();
            
            if ($res -> error) {
                $myJSON = '{"status":"4"}';
                echo $myJSON;
                return 0;
            }
            else {
                while ($res -> fetch()) {
                    $categoryID = $ID;
                }
            }
        }
    } 
}
?>