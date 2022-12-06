$(document).ready(function(){
    let xhr = new XMLHttpRequest();
    // Create a state change callback
    xhr.onreadystatechange = function () {
        var length = 0;
        var i = 0;
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Print received data from server
            console.log(this.responseText);
            if (this.responseText != '0') {
                var myObj = JSON.parse(this.responseText);
            console.log(myObj)
            length = Object.keys(myObj).length;
            while (length != 0 ) {
                if (myObj[i].delivery_status == 1) {
                    $("#tt").text(myObj[i].count_status+" Orders");
                }
                else if (myObj[i].delivery_status == 2) {
                    $("#qt").text(myObj[i].count_status+" Orders");
                }
                else if (myObj[i].delivery_status == 5) {
                    $("#qn").text(myObj[i].count_status+" Orders");
                }
                else if (myObj[i].delivery_status == 3) {
                    $("#r").text(myObj[i].count_status+" Orders");
                }
                else if (myObj[i].delivery_status == 4) {
                    $("#o").text(myObj[i].count_status+" Orders");
                }
                i++;
                length--;
            }
            }
        }
    };
    // Converting JSON data to string
    xhr.open("GET","phpFiles/countStatusOrders.php")
    // Sending data with the request
    xhr.send();
});