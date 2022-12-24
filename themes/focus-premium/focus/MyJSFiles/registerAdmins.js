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
    function validation_username() {
        var username = document.getElementById("username").value;
        username = username.toLowerCase();
        console.log(username);
        if (username == '') {
            $('#user-small').text('');
        }
        else if ((/^[0-9]/).test(username[0])) {
            $('#user-small').css('color','red');
            $('#user-small').text('invalid name');
        }
        else {
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
                        $('#user-small').css('color','red');
                        $('#user-small').text('username is already exist');
                        checkUsername = 1;
                        console.log("error");
                    }
                    else {
                        $('#user-small').css('color','green');
                        $('#user-small').text('valid');
                        checkUsername = 2;
                        console.log("success");
                    }
                }
            }
            ajax.open("post", "phpFiles/checkRegister.php");
            ajax.send(formData);
        }
    }
    // ----- CHECK PHONE -----
    function validation_phone() {
        var phone = document.getElementById("phone").value;
        var testNum = /^[0-9]/;
        if (phone == '') {
            $('#phone-small').text('');
        }
        else if(phone.length > 10) {
            $('#phone-small').css('color','red');
            $('#phone-small').text('invalid number');
        }
        else if(phone.length < 10) {
            $('#phone-small').text('');
        }
        else {
            $('#phone-small').text('');
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
                        $('#phone-small').css('color','red');
                        $('#phone-small').text('number is already exist');
                        checkPhone = 7;
                        console.log("error");
                    }
                    else {
                        console.log("success");
                        checkPhone = 2;
                    }
                }
            }
            ajax.open("post", "phpFiles/checkPhone.php");
            ajax.send(formData);
        }
    }
    // ----- CHECK EMAIL -----
    function validation_email() {
        var email = document.getElementById("email").value;
        email = email.toLowerCase();
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (email == '') {
            console.log(email);
            $('#email-small').text('');
        }
        else {
            if (!testEmail.test(email)) {
                console.log(email);
                $('#email-small').css('color','red');
                $('#email-small').text('invalid email');
            }
            else {
                console.log(email);
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
                        console.log(this.responseText);
                        var myObj = JSON.parse(this.responseText);
                        console.log(myObj);
                        if (myObj.status == '3') {
                            $('#email-small').css('color','red');
                            $('#email-small').text('email is already exist');
                            checkEmail = 3;
                            console.log("error");
                        }
                        else {
                            $('#email-small').css('color','green');
                            $('#email-small').text('valid');
                            checkEmail = 2;
                            console.log("success");
                        }
                    }
                }
                ajax.open("post", "phpFiles/checkRegister.php");
                ajax.send(formData);
            }
        }
    }
    // ----- CHECK PASSWORD -----
    function validation_pass() {
        var pass = document.getElementById("password").value;
        var testCapitalChar = /^[A-Z]/;
        var testSmallChar = /^[a-z]/;
        var testNum = /^[0-9]/;
        var testSpicalChar = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        lengthPass = pass.length;
        capitalChar = 0;
        smallChar = 0;
        spicalChar = 0;
        num = 0;
        console.log(pass);
        if (pass == '') {
            $('#pass-capital-character').css('color','rgb(157, 157, 157)');
            $('#pass-small-character').css('color','rgb(157, 157, 157)');
            $('#pass-spical-character').css('color','rgb(157, 157, 157)');
        }
        else {
            if (lengthPass >= 8) {
                $('#pass-num-character').css('color','green');
            }
            else {
                $('#pass-num-character').css('color','rgb(157, 157, 157)');
            }
            for (var i = 0 ; i < lengthPass ; i++) {
                var char = pass[i];
                if (testCapitalChar.test(char)) {
                    $('#pass-capital-character').css('color','green');
                    capitalChar = 1;
                }
                else if (testSmallChar.test(char)) {
                    $('#pass-small-character').css('color','green');
                    smallChar = 1;
                }
                else if (testSpicalChar.test(char)) {
                    $('#pass-spical-character').css('color','green');
                    spicalChar = 1;
                }
            }
        }
        if (capitalChar != 1) {
            $('#pass-capital-character').css('color','rgb(157, 157, 157)');
        }
        if (smallChar != 1) {
            $('#pass-small-character').css('color','rgb(157, 157, 157)');
        }
        if (spicalChar != 1) {
            $('#pass-spical-character').css('color','rgb(157, 157, 157)');
        }
        num = lengthPass + capitalChar + smallChar + spicalChar;
        if (num >= 11) {
            checkPass = 1;
        }
        else {
            checkPass = 0;
        }
    }
    // ----- REGISTER -----
    function register() {
        var bool = true;
        var username = document.getElementById('username').value;
        username = username.toLowerCase();
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        phone = phone.toLowerCase();
        var pass = document.getElementById('password').value;
        var permission = $('.permission').find(":selected").text();
        if (permission == 'Permission') {
            $('#permission-small').css('color','red');
            $('#permission-small').text('please select permission');
            bool = false;
        }
        if (username == '') {
            $('#user-small').css('color','red');
            $('#user-small').text('* empty');
            bool = false;
        }
        else if (checkUsername == 1) {
            bool = false;
        }
        if (phone == '') {
            $('#phone-small').css('color','red');
            $('#phone-small').text('* empty');
            bool = false;
        }
        else if (phone.length < 10) {
            $('#phone-small').css('color','red');
            $('#phone-small').text('invalid number');
            bool = false;
        }
        if (!Number(phone)) {
            console.log('not number');
            $('#phone-small').css('color','red');
            $('#phone-small').text('invalid number');
            bool = false;
        }
        else if (phone.length > 10) {
            $('#phone-small').css('color','red');
            $('#phone-small').text('invalid number');
            bool = false;
        }
        else if (checkPhone == 7) {
            bool = false;
        }
        if (email == '') {
            $('#email-small').css('color','red');
            $('#email-small').text('* empty');
            bool = false;
        }
        else if (checkEmail == 3) {
            bool = false;
        }
        console.log(capitalChar +' ' + smallChar + ' ' + spicalChar + ' ' + lengthPass);
        if (capitalChar == 0 || smallChar == 0 || spicalChar == 0 || lengthPass < 8) {
            if (capitalChar == 0) {
                $('#pass-capital-character').css('color','red');
                bool = false;
            }
            if (smallChar == 0) {
                $('#pass-small-character').css('color','red');
                bool == false;
            }
            if (spicalChar == 0) {
                $('#pass-spical-character').css('color','red');
                bool = false;
            }
            if (lengthPass < 8) {
                $('#pass-num-character').css('color','red');
                bool = false;
            }
        }
        if (bool == true) {
            console.log(bool);
            var formData = new FormData();
            formData.append("username", username);
            formData.append("phone", phone);
            formData.append("email", email);
            formData.append("password", pass);
            formData.append("permission", permission);
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
                        document.getElementById('username').value = '';
                        document.getElementById('phone').value = '';
                        document.getElementById('email').value = '';
                        document.getElementById('password').value = '';
                        $(".permission").val("op").change();
                        $('#admin-small').text('');
                        $('#user-small').text('');
                        $('#email-small').text('');
                        $('#pass-small').text('');
                        $('#permission-small').text('');
                        $('#pass-capital-character').css('color','rgb(157, 157, 157)');
                        $('#pass-small-character').css('color','rgb(157, 157, 157)');
                        $('#pass-spical-character').css('color','rgb(157, 157, 157)');
                        $('#pass-num-character').css('color','rgb(157, 157, 157)');
                        console.log("success");
                    }
                }
            }
            ajax.open("post", "phpFiles/page-register.php");
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
                    $('.permission').append('<option disabled="disabled" value="op" selected="selected">'+"Permission"+'</option>');
                    while (length != 0 ) {
                        $('.permission').append('<option>'+myObj[i].permission+'</option>');
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