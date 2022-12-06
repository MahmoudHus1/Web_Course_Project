// ----- SALEES RATIO MOBILES -----
$(document).ready(function(){
  console.log('sum');
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log('sumMobile: ' +this.responseText);
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
                    if (myObj[i].item_name == 'iphone') {
                        var ratio = (myObj[i].sum/myObj[i].total)*100;
                        $('#iphone').css('width', Math.round(ratio)+'%').attr('aria-valuenow', Math.round(ratio));
                        $('#iphone').text(Math.round(ratio)+'%');
                    }
                    else if (myObj[i].item_name == 'samsung') {
                        var ratio = (myObj[i].sum/myObj[i].total)*100;
                        $('#samsung').css('width', Math.round(ratio)+'%').attr('aria-valuenow', Math.round(ratio));
                        $('#samsung').text(Math.round(ratio)+'%');
                    }
                    else if (myObj[i].item_name == 'hawawi') {
                        var ratio = (myObj[i].sum/myObj[i].total)*100;
                        $('#hawawi').css('width', Math.round(ratio)+'%').attr('aria-valuenow', Math.round(ratio));
                        $('#hawawi').text(Math.round(ratio)+'%');
                    }
                    else if (myObj[i].item_name == 'mi') {
                        var ratio = (myObj[i].sum/myObj[i].total)*100;
                        $('#mi').css('width', Math.round(ratio)+'%').attr('aria-valuenow', Math.round(ratio));
                        $('#mi').text(Math.round(ratio)+'%');
                    }
                    else {
                    }
                    lengthJSON--;
                    i++;
                }
            }
        }
    }
    ajax.open("get", "phpFiles/sum-sales-mobiles.php");
    ajax.send();
});
// ----- SALEES RATIO Laptops -----
$(document).ready(function(){
    console.log('sum');
      if (window.XMLHttpRequest) {
          ajax = new XMLHttpRequest();
      } else {
          ajax = new ActiveXObject("Microsoft.XMLHTTP");
      }
      ajax.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
              console.log('sumMobile: ' +this.responseText);
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
                      if (myObj[i].item_name == 'mac') {
                          var ratio = (myObj[i].sum/myObj[i].total)*100;
                          $('#mac').css('width', Math.round(ratio)+'%').attr('aria-valuenow', Math.round(ratio));
                          $('#mac').text(Math.round(ratio)+'%');
                      }
                      else if (myObj[i].item_name == 'msi') {
                          var ratio = (myObj[i].sum/myObj[i].total)*100;
                          $('#msi').css('width', Math.round(ratio)+'%').attr('aria-valuenow', Math.round(ratio));
                          $('#msi').text(Math.round(ratio)+'%');
                      }
                      else if (myObj[i].item_name == 'lenovo') {
                          var ratio = (myObj[i].sum/myObj[i].total)*100;
                          $('#lenovo').css('width', Math.round(ratio)+'%').attr('aria-valuenow', Math.round(ratio));
                          $('#lenovo').text(Math.round(ratio)+'%');
                      }
                      else if (myObj[i].item_name == 'dell') {
                          var ratio = (myObj[i].sum/myObj[i].total)*100;
                          $('#dell').css('width', Math.round(ratio)+'%').attr('aria-valuenow', Math.round(ratio));
                          $('#dell').text(Math.round(ratio)+'%');
                      }
                      else {
                      }
                      lengthJSON--;
                      i++;
                  }
              }
          }
      }
      ajax.open("get", "phpFiles/sum-sales-laptops.php");
      ajax.send();
  });