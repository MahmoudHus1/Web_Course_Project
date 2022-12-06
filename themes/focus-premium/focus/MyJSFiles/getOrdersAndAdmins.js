var order_ID;
var details;
$(document).ready(function(){
    let xhr = new XMLHttpRequest();
    // Create a state change callback
    xhr.onreadystatechange = function () {
        var length = 0;
        var i = 0;
        var order_id;
        var name;
        var phone;
        var location;
        var date;
        var total_charge;
        var status;
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Print received data from server
            console.log(this.responseText);
            if (this.responseText != '0') {
                var myObj = JSON.parse(this.responseText);
                console.log(myObj)
                length = Object.keys(myObj).length;
                while (length != 0 ) {
                    order_ID = myObj[i].order_id;
                    name = myObj[i].name;
                    phone = myObj[i].phone;
                    location = myObj[i].location;
                    var details = myObj[i].details;
                    date = myObj[i].date;
                    total_charge = myObj[i].total_charge;
                    status = myObj[i].status;
                    $("#order-table").append('<tr>'
                    +'<td>'+name+'</td>'
                    +'<td>'+phone+'</td>'
                    +'<td>'+location+'</td>'
                    +'<td>'+details+'</td>'
                    +'<td>'+total_charge+'</td>'
                    +'<td>'+date+'</td>'
                    +'<td>'+status+'</td>'
                    +'</tr>');
                    i++;
                    length--;
                }
            }
        }
    };
    // Converting JSON data to string
    xhr.open("GET","phpFiles/getOrders.php")
    // Sending data with the request
    xhr.send();
});
// get admin
$(document).ready(function(){
    let xhr = new XMLHttpRequest();
    // Create a state change callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Print received data from server
            if (this.responseText != '0') {
                console.log(this.responseText);
                var myObj = JSON.parse(this.responseText);
                console.log(myObj)
                length = Object.keys(myObj).length;
                var i = 0;
            while (length != 0 ) {
                $("#get-admins").append('<tr>'
                +'<td>'+myObj[i].name+'</td>'
                +'<td>'+myObj[i].email+'</td>'
                +'<td>'+myObj[i].phone+'</td>'
                +'<td>'+myObj[i].permission+'</td>'
                +'</tr>');
                i++;
                length--;
            }
            }
        }
    };
    // Converting JSON data to string
    xhr.open("GET","phpFiles/getAdminAndPermission.php")
    // Sending data with the request
    xhr.send();
});
$(document).ready(function(){
    let xhr = new XMLHttpRequest();
    // Create a state change callback
    xhr.onreadystatechange = function () {
        var length = 0;
        var i = 0;
        var name;
        var phone;
        var location;
        var date;
        var total_charge;
        var status;
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Print received data from server
            console.log(this.responseText);
            if (this.responseText != '0') {
                var myObj = JSON.parse(this.responseText);
            console.log('status'+myObj)
            length = Object.keys(myObj).length;
            while (length != 0 ) {
                order_ID = myObj[i].order_id;
                name = myObj[i].name;
                phone = myObj[i].phone;
                location = myObj[i].location;
                var details = myObj[i].details;
                console.log('ddd'+details);
                date = myObj[i].date;
                total_charge = myObj[i].total_charge;
                status = myObj[i].status;
                if(status == 1) {
                    console.log('ddd'+details);
                    $("#tt-table").append('<tr>'
                    +'<td>'+name+'</td>'
                    +'<td>'+phone+'</td>'
                    +'<td>'+location+'</td>'
                    +'<td>'+details+'</td>'
                    +'<td>'+total_charge+'</td>'
                    +'<td>'+date+'</td>'
                    +'</tr>');
                }
                else if (status == 2) {
                    $("#qt-table").append('<tr>'
                    +'<td>'+name+'</td>'
                    +'<td>'+phone+'</td>'
                    +'<td>'+location+'</td>'
                    +'<td>'+details+'</td>'
                    +'<td>'+total_charge+'</td>'
                    +'<td>'+date+'</td>'
                    +'</tr>');
                }
                else if (status == 3) {
                    $("#r-table").append('<tr>'
                    +'<td>'+name+'</td>'
                    +'<td>'+phone+'</td>'
                    +'<td>'+location+'</td>'
                    +'<td>'+details+'</td>'
                    +'<td>'+total_charge+'</td>'
                    +'<td>'+date+'</td>'
                    +'</tr>');
                }
                else if (status == 4) {
                    $("#o-table").append('<tr>'
                    +'<td>'+name+'</td>'
                    +'<td>'+phone+'</td>'
                    +'<td>'+location+'</td>'
                    +'<td>'+details+'</td>'
                    +'<td>'+total_charge+'</td>'
                    +'<td>'+date+'</td>'
                    +'</tr>');
                }
                else if (status == 5) {
                    $("#qn-table").append('<tr>'
                    +'<td>'+name+'</td>'
                    +'<td>'+phone+'</td>'
                    +'<td>'+location+'</td>'
                    +'<td>'+details+'</td>'
                    +'<td>'+total_charge+'</td>'
                    +'<td>'+date+'</td>'
                    +'</tr>');
                }
                i++;
                length--;
            }
            }
        }
    };
    // Converting JSON data to string
    xhr.open("GET","phpFiles/getOrders.php")
    // Sending data with the request
    xhr.send();
});