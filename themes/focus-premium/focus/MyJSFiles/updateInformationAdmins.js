$(document).ready(function() {
    document.getElementById('edit-username').value = '';
    document.getElementById('edit-phone').value = '';
    document.getElementById('edit-email').value = '';
    document.getElementById('edit-password').value = '';
});
var checkPass = 0;
var checkEmail = 0;
var checkUsername = 0;
var lengthPass = 0;
var capitalChar = 0;
var smallChar = 0;
var spicalChar = 0;
var num = 0;
var checkPhone = 0;
// ----- CHECK USERNAME -----
function u_validation_username() {
    var username = document.getElementById("edit-username").value;
    username = username.toLowerCase();
    if (username == '') {
        $('#edit-user-small').text('');
    }
    else if ((/^[0-9]/).test(username[0])) {
        $('#edit-user-small').css('color','red');
        $('#edit-user-small').text('invalid name');
        checkUsername = 100;
    }
    else {
        console.log(username);
        var formData = new FormData();
        formData.append("username", username);
        if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
        }
        else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }
        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText);
                if (myObj.status == '1') {
                    $('#edit-user-small').css('color','red');
                    $('#edit-user-small').text('username is already exist');
                    checkUsername = 1;
                    console.log("error");
                }
                else {
                    $('#edit-user-small').css('color','green');
                    $('#edit-user-small').text('valid');
                    checkUsername = 0;
                    console.log("success");
                }
            }
        }
        ajax.open("post", "phpFiles/checkRegister.php");
        ajax.send(formData);
    }
}
// ----- CHECK PHONE -----
function u_validation_phone() {
    var phone = document.getElementById("edit-phone").value;
    if (phone == '') {
        $('#edit-phone-small').text('');
    }
    else if(phone.length > 10) {
        $('#edit-phone-small').css('color','red');
        $('#edit-phone-small').text('invalid number');
    }
    else if(phone.length < 10) {
        $('#edit-phone-small').text('');
    }
    else {
        $('#edit-phone-small').text('');
        var formData = new FormData();
        formData.append("phone", phone);
        if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
        }
        else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }
        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText);
                if (myObj.status == '7') {
                    $('#edit-phone-small').css('color','red');
                    $('#edit-phone-small').text('number is already exist');
                    checkPhone = 7;
                    console.log("error");
                }
                else {
                    console.log("success");
                    checkPhone = 0;
                }
            }
        }
        ajax.open("post", "phpFiles/checkPhone.php");
        ajax.send(formData);
    }
}
// ----- CHECK EMAIL -----
function u_validation_email() {
    var email = document.getElementById("email").value;
    email = email.toLowerCase();
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (email == '') {
        $('#edit-email-small').text('');
    }
    else {
        if (!testEmail.test(email)) {
            $('#edit-email-small').css('color','red');
            $('#edit-email-small').text('invalid email');
            checkEmail = 100;
        }
        else {
            var formData = new FormData();
            formData.append("email",email);
            if (window.XMLHttpRequest) {
                ajax = new XMLHttpRequest();
            }
            else {
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            }
            ajax.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var myObj = JSON.parse(this.responseText);
                    if (myObj.status == '3') {
                        $('#email-small').css('color','red');
                        $('#email-small').text('email is already exist');
                        checkEmail = 3;
                    }
                    else {
                        $('#edit-email-small').css('color','green');
                        $('#edit-email-small').text('valid');
                        checkEmail = 0;
                    }
                }
            }
            ajax.open("post", "phpFiles/checkRegister.php");
            ajax.send(formData);
        }
    }
}
// ----- CHECK PASSWORD -----
function u_validation_pass() {
    var pass = document.getElementById("edit-password").value;
    var testCapitalChar = /^[A-Z]/;
    var testSmallChar = /^[a-z]/;
    var testSpicalChar = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    lengthPass = pass.length;
    capitalChar = 0;
    smallChar = 0;
    spicalChar = 0;
    num = 0;
    console.log(pass);
    if (pass == '') {
        $('#edit-pass-capital-character').css('color','rgb(157, 157, 157)');
        $('#edit-pass-small-character').css('color','rgb(157, 157, 157)');
        $('#edit-pass-spical-character').css('color','rgb(157, 157, 157)');
    }
    else {
        if (lengthPass >= 8) {
            $('#edit-pass-num-character').css('color','green');
        }
        else {
            $('#edit-pass-num-character').css('color','rgb(157, 157, 157)');
        }
        for (var i = 0 ; i < lengthPass ; i++) {
            var char = pass[i];
            if (testCapitalChar.test(char)) {
                $('#edit-pass-capital-character').css('color','green');
                capitalChar = 1;
            }
            else if (testSmallChar.test(char)) {
                $('#edit-pass-small-character').css('color','green');
                smallChar = 1;
            }
            else if (testSpicalChar.test(char)) {
                $('#edit-pass-spical-character').css('color','green');
                spicalChar = 1;
            }
        }
    }
    if (capitalChar != 1) {
        $('#edit-pass-capital-character').css('color','rgb(157, 157, 157)');
    }
    if (smallChar != 1) {
        $('#edit-pass-small-character').css('color','rgb(157, 157, 157)');
    }
    if (spicalChar != 1) {
        $('#edit-pass-spical-character').css('color','rgb(157, 157, 157)');
    }
    num = lengthPass + capitalChar + smallChar + spicalChar;
    if (num >= 11) {
        checkPass = 1;
    }
    else {
        checkPass = 0;
    }
}
// ----- update -----
function update() {
    var bool = true;
    var username = document.getElementById('edit-username').value;
    username = username.toLowerCase();
    var phone = document.getElementById('edit-phone').value;
    var email = document.getElementById('edit-email').value;
    email = email.toLowerCase();
    var pass = document.getElementById('edit-password').value;
    var permission = $('.edit-permission').find(":selected").text();
    var admin = $('.edit-admin').find(":selected").text();
    console.log(permission);
    if (admin == 'Select admin') {
        console.log(admin);
        $('#edit-admin-small').css('color','red');
        $('#edit-admin-small').text('please select admin');
        bool = false;
    }
    if (checkUsername == 1 || checkUsername == 100) {
        bool = false;
    }
    if (phone == '') {
    }
    else {
    if (phone.length < 10) {
        $('#edit-phone-small').css('color','red');
        $('#edit-phone-small').text('invalid number');
        bool = false;
    }
    if (!Number(phone)) {
        console.log('not number');
        $('#edit-phone-small').css('color','red');
        $('#edit-phone-small').text('invalid number');
        bool = false;
    }
    else if (phone.length > 10) {
        $('#edit-phone-small').css('color','red');
        $('#edit-phone-small').text('invalid number');
        bool = false;
    }
    else if (checkPhone == 7) {
        bool = false;
    }
    }
    if (checkEmail == 3 || checkEmail == 100) {
        bool = false;
    }
    if (pass == '') {
    }
    else {
    console.log(capitalChar +' ' + smallChar + ' ' + spicalChar + ' ' + lengthPass);
    if (capitalChar == 0 || smallChar == 0 || spicalChar == 0 || lengthPass < 8) {
        if (capitalChar == 0) {
            $('#edit-pass-capital-character').css('color','red');
            bool = false;
        }
        if (smallChar == 0) {
            $('#edit-pass-small-character').css('color','red');
            bool == false;
        }
        if (spicalChar == 0) {
            $('#edit-pass-spical-character').css('color','red');
            bool = false;
        }
        if (lengthPass < 8) {
            $('#edit-pass-num-character').css('color','red');
            bool = false;
        }
    }
    }
    if (bool == true) {
        console.log(bool);
        var formData = new FormData();
        formData.append("admin", admin);
        if (username != '') {
            formData.append("username", username);
        }
        if (phone != '') {
            formData.append("phone", phone);
        }
        if (email != '') {
            formData.append("email", email);
        }
        if (pass != '') {
            formData.append("password", pass);
        }
        if (permission != 'Permission') {
            formData.append("permission", permission);
        }
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
                    swal({
                        icon: "success",
                        title: "Done",
                    });
                    $(".edit-admin").val("ad").change();
                    document.getElementById('edit-username').value = '';
                    document.getElementById('edit-phone').value = '';
                    document.getElementById('edit-email').value = '';
                    document.getElementById('edit-password').value = '';
                    $(".edit-permission").val("op").change();
                    $('#edit-admin-small').text('');
                    $('#edit-user-small').text('');
                    $('#edit-email-small').text('');
                    $('#edit-pass-small').text('');
                    $('#edit-permission-small').text('');
                    $('#edit-pass-capital-character').css('color','rgb(157, 157, 157)');
                    $('#edit-pass-small-character').css('color','rgb(157, 157, 157)');
                    $('#edit-pass-spical-character').css('color','rgb(157, 157, 157)');
                    $('#edit-pass-num-character').css('color','rgb(157, 157, 157)');
                    console.log("success");
                }
            }
        }
        ajax.open("post", "phpFiles/update-admin-information.php");
        ajax.send(formData);
    }
    else {
        console.log(bool);
    }
}
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
            $('.edit-permission').append('<option disabled="disabled" value="op" selected="selected">'+"Permission"+'</option>');
            while (length != 0 ) {
                $('.edit-permission').append('<option>'+myObj[i].permission+'</option>');
                i++;
                length--;
        }
    }
};
// Converting JSON data to string
xhr.open("GET","phpFiles/getPermission.php")
// Sending data with the request
xhr.send();
});