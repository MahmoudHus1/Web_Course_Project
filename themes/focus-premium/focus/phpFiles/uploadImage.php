<?php
include "DBconnection.php";

if ($_FILES["image"]["name"] != '') {
    $var1 = rand(1111,9999);  // generate random number in $var1 variable
    $var2 = rand(1111,9999);  // generate random number in $var2 variable
	
    $var3 = $var1.$var2;  // concatenate $var1 and $var2 in $var3
    $var3 = md5($var3);   // convert $var3 using md5 function and generate 32 characters hex number

    $fnm = $_FILES["image"]["name"];    // get the image name in $fnm variable
    $dst = "../itemsImages/".$var3.$fnm;  // storing image path into the {all_images} folder with 32 characters hex number and file name
    $dst_db = "itemsImages/".$var3.$fnm; // storing image path into the database with 32 characters hex number and file name

    move_uploaded_file($_FILES["image"]["tmp_name"],$dst);  // move image into the {all_images} folder with 32 characters hex number and image name
	
    $sql = 'UPDATE items SET img = ? Where name = "msi"';
    $res = $conn -> prepare($sql);
    $res -> bind_param('s',$dst_db);
    $res -> execute();
		
    if($res -> error) {
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