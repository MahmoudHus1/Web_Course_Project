<?php
include "DBconnection.php";
$i = 0;

$sql = 'SELECT * FROM categories';
$res = $conn -> prepare($sql);
$res -> execute();
$res -> bind_result($ID,$name,$icon,$parent,$status);
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
            $json['icon'] = $icon;
            $json['parent'] = $parent;
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