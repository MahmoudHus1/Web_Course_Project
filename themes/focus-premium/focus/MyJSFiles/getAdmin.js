$(document).ready(function(){
        let xhr = new XMLHttpRequest();
        // Create a state change callback
        xhr.onreadystatechange = function () {
            var length = 0;
            var i = 0;
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Print received data from server
                console.log(this.responseText);
                var myObj = JSON.parse(this.responseText);
                console.log(myObj)
                    length = Object.keys(myObj).length;
                    $('.admin').append('<option disabled="disabled" value="ad" selected="selected">'+"Select admin"+'</option>');
                    while (length != 0 ) {
                        $('.admin').append('<option>'+myObj[i].admin+'</option>');
                        i++;
                        length--;
                }
            }
        };
        // Converting JSON data to string
        xhr.open("GET","phpFiles/getAdmin.php")
        // Sending data with the request
        xhr.send();
    });

    /////

    $(document).ready(function(){
        let xhr = new XMLHttpRequest();
        // Create a state change callback
        xhr.onreadystatechange = function () {
            var length = 0;
            var i = 0;
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Print received data from server
                console.log(this.responseText);
                var myObj = JSON.parse(this.responseText);
                console.log(myObj)
                    length = Object.keys(myObj).length;
                    $('.edit-admin').append('<option disabled="disabled" value="e-ad" selected="selected">'+"Select admin"+'</option>');
                    while (length != 0 ) {
                        $('.edit-admin').append('<option>'+myObj[i].admin+'</option>');
                        i++;
                        length--;
                }
            }
        };
        // Converting JSON data to string
        xhr.open("GET","phpFiles/getAdmin.php")
        // Sending data with the request
        xhr.send();
    });