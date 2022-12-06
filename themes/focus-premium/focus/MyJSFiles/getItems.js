// ----- get Items -----
$(document).ready(function(){
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
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
                    if (myObj[i].quantity == 0) {
                        $('#quantities_list').append('<li>'
                        +'<label>'
                        +'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#7B68EE" class="bi bi-check-square-fill" viewBox="0 0 16 16">'
                        +'<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>'
                        +'</svg>'
                        +'<span>'+'<strike>'+myObj[i].name+'</strike>'+'</span>'
                        +'<span style="text-align: left;">'+'quantity : '+myObj[i].quantity
                        +'</span>'+'</label>'
                        +'</li>'
                        );
                    }
                    else {
                        $('#quantities_list').append('<li>'
                        +'<label>'
                        +'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">'
                        +'<path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>'
                        +'</svg>'
                        +'<span>'+myObj[i].name+'</span>'
                        +'<span style="text-align: left;">'+'quantity : '+myObj[i].quantity
                        +'</span>'+'</label>'
                        +'</li>'
                        );
                    }
                    lengthJSON--;
                    i++;
                }
            }
        }
    }
    ajax.open("get", "phpFiles/getItems.php");
    ajax.send();
});