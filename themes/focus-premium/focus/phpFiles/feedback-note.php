<?php
include "DBconnection.php";
$i = 0;
$sql = 'SELECT f.note, c.name, f.date FROM customer_feedback AS f
INNER JOIN customer AS c ON f.customer_ID = c.ID
WHERE f.note IS NOT NULL;';
$res = $conn -> prepare($sql);
$res -> execute();
$res -> bind_result($note,$name,$date);
$res -> store_result();

if ($conn -> error) {
    $myJSON = '{"status":"4"}';
    echo $myJSON;
    return 0;
}
else {
    if ($res -> num_rows > 0) {
        while ($res -> fetch()) {
            $json['name'] = $name;
            $json['note'] = $note;
            $json['date'] = $date;
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