// ----- COUNT ADMIN -----
$(document).ready(function(){
    console.log('admins');
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var myObj = JSON.parse(this.responseText);
            if (myObj.status == '4') {
                swal({
                    icon: "error",
                    title: "error in connect",
                });
                console.log("error in connect");
            }
            else {
                $('#count-admin').text(myObj[0].count);
            }
        }
    }
    ajax.open("get", "phpFiles/count-admin.php");
    ajax.send();
});
// ----- COUNT CUSTOMERS -----
$(document).ready(function(){
    console.log('customers');
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var myObj = JSON.parse(this.responseText);
            if (myObj.status == '4') {
                swal({
                    icon: "error",
                    title: "error in connect",
                });
                console.log("error in connect");
            }
            else {
                $('#count-customer').text(myObj[0].count);
            }
        }
    }
    ajax.open("get", "phpFiles/count-customers.php");
    ajax.send();
});
// ----- COUNT ORDERS -----
$(document).ready(function(){
    console.log('orders');
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var myObj = JSON.parse(this.responseText);
            if (myObj.status == '4') {
                swal({
                    icon: "error",
                    title: "error in connect",
                });
                console.log("error in connect");
            }
            else {
                $('#count-orders').text(myObj[0].count);
            }
        }
    }
    ajax.open("get", "phpFiles/count-orders.php");
    ajax.send();
});
// ----- SUM PROFIT -----
$(document).ready(function(){
    console.log('profit');
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var myObj = JSON.parse(this.responseText);
            if (myObj.status == '4') {
                swal({
                    icon: "error",
                    title: "error in connect",
                });
                console.log("error in connect");
            }
            else {
                $('#sum-profit').text(myObj[0].sum);
            }
        }
    }
    ajax.open("get", "phpFiles/sum-profit.php");
    ajax.send();
});
// ----- COUNT feedback -----
$(document).ready(function(){
    console.log('customers');
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var myObj = JSON.parse(this.responseText);
            console.log('e1 : '+myObj);
            if (myObj.status == '4') {
                swal({
                    icon: "error",
                    title: "error in connect",
                });
                console.log("error in connect");
            }
            else {
                $('#count-feedback').text(myObj[0].count);
            }
        }
    }
    ajax.open("get", "phpFiles/count-feedback.php");
    ajax.send();
});
// ----- COUNT RATE feedback -----
$(document).ready(function(){
    console.log('customers');
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText != '0') {
            var myObj = JSON.parse(this.responseText);
            var lengthJSON = Object.keys(myObj).length;
            var i = 0;
            if (myObj.status == '4') {
                swal({
                    icon: "error",
                    title: "error in connect",
                });
                console.log("error in connect");
            }
            else {
                while (lengthJSON > 0) {
                    if (myObj[i].rate == 1) {
                        $('#c-r-f-1').append(myObj[i].count+' '+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">'
                        +'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                        +'</svg>');
                    }
                    else if (myObj[i].rate == 2) {
                        console.log("rate "+myObj[i].count);
                        $('#c-r-f-2').append(myObj[i].count+' '+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">'
                        +'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                        +'</svg>'+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">'
                        +'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                        +'</svg>');
                    }
                    else if (myObj[i].rate == 3) {
                        $('#c-r-f-3').append(myObj[i].count+' '+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">'
                        +'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                        +'</svg>'+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">'
                        +'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                        +'</svg>'+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">'
                        +'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                        +'</svg>');
                    }
                    else if (myObj[i].rate == 4) {
                        $('#c-r-f-4').append(myObj[i].count+' '+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">'
                        +'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                        +'</svg>'+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">'
                        +'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                        +'</svg>'+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">'
                        +'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                        +'</svg>'+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">'
                        +'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                        +'</svg>');
                    }
                    else {
                        $('#c-r-f-5').append(myObj[i].count+' '+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">'
                        +'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                        +'</svg>'+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">'
                        +'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                        +'</svg>'+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">'
                        +'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                        +'</svg>'+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">'
                        +'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                        +'</svg>'+'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">'
                        +'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                        +'</svg>');
                    }
                    lengthJSON--;
                    i++;
                }
            }
            }
        }
    }
    ajax.open("get", "phpFiles/count-rate-feedback.php");
    ajax.send();
});