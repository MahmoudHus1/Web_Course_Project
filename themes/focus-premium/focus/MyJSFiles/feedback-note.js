// ----- FEEDBACK NOTE -----
$(document).ready(function(){
    console.log('feedback-note');
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
                    $('#notes').append('<div class="media">'
                    +'<div class="media-left">'
                    +'<img class="media-object mr-3" src="./images/avatar/1.png" alt="...">'
                    +'</div>'
                    +'<div class="media-body">'
                    +'<h4 class="media-heading text-primary">'+myObj[i].name+'</h4>'
                    +'<p>'+myObj[i].note+'</p>'
                    +'<p class="comment-date">'+myObj[i].date+'</p>'
                    +'</div>'
                    +'</div>'
                    );
                    lengthJSON--;
                    i++;
                }
            }
        }
        }
    }
    ajax.open("get", "phpFiles/feedback-note.php");
    ajax.send();
});