<?php
include "DBconnection.php";

$i = 0;
$sql = 'SELECT c.name,c.phone_number,o.location,o.date,o.total_charge,ds.status,o.ID  FROM customer AS c 
INNER JOIN orders AS o ON o.customer_ID = c.ID
INNER JOIN delivery_status AS ds ON o.status_ID = ds.ID;';
$res = $conn -> prepare($sql);
$res -> execute();
$res -> bind_result($name,$phone,$location,$date,$total_charge,$status,$order_ID);
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
            $json['phone'] = $phone;
            $json['location'] = $location;
            $json['date'] = $date;
            $json['total_charge'] = $total_charge;
            $json['status'] = $status;
            $json['order_id'] = $order_ID;
            
            $sql1 = 'SELECT CONCAT(i.name,"(",od.quantity,")"),od.order_ID FROM order_details AS od
            INNER JOIN orders AS o ON od.order_ID = o.ID
            INNER JOIN items AS i ON od.item_ID = i.ID;';
            $res1 = $conn -> prepare($sql1);
            $res1 -> execute();
            $res1 -> bind_result($order_details,$id);
            $res1 -> store_result();
            
            if ($conn -> error) {
                $myJSON = '{"status":"4"}';
                echo $myJSON;
                return 0;
            }
            else {
                $details = '';
                while ($res1 -> fetch()) {
                    if ($order_ID == $id) {
                        $details .= $order_details.', ';
                    }
                }
                $json['details'] = $details;
            }
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