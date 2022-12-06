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
                length = Object.keys(myObj).length;
                $('#single-select').append('<option value="oi" disabled selected>Select item</option>');
                while (length != 0 ) {
                    $('#single-select').append('<option value="'+myObj[i].name+'">'+myObj[i].name+'</option>');
                    i++;
                    length--;
            }
        }
    };
    // Converting JSON data to string
    xhr.open("GET","phpFiles/getItems.php")
    // Sending data with the request
    xhr.send();
});
// Edit Item
$('#submit-edit').click(function(){
    var bool = true;
    var itemName = $('#single-select').find(":selected").val();
    if (itemName == 'oi') {
        $('#edit-itemname-small').text('Please select item');
        bool = false;
    }
    var newItemName = document.getElementById('val-new-itemname').value;
    newItemName = newItemName.toLowerCase();
    var newModel = document.getElementById('val-new-model').value;
    newModel = newModel.toLowerCase();
    var newQuantity = document.getElementById('val-new-quantity').value;
    var newPrice = document.getElementById('val-new-price').value;
    var newOffer = document.getElementById('val-new-offer').value;
    var newDescription = document.getElementById('val-new-description').value;
    newDescription = newDescription.toLowerCase();
    var nameImage;
    var image;
    var newCategory = document.getElementsByName('edit-category-radio');
    var newBrand = document.getElementsByName('edit-brand-radio');
    var r = 0;
    for (let index = 0; index < newCategory.length; index++) {
        if (newCategory[index].checked) {
            r++;
            newCategory = newCategory[index].value;
            console.log(newCategory);
            newCategory = newCategory.toLowerCase();
            $('#small-edit-category-radio').text('');
        }
    }
    for (let index = 0; index < newBrand.length; index++) {
        if (newBrand[index].checked) {
            r++;
            newBrand = newBrand[index].value;
            newBrand = newBrand.toLowerCase();
            $('#small-edit-brand-radio').text('');
        }
    }
    if (document.getElementById('val-new-img').files.length == 0) {
        $('#new-image-small').text('');
    }
    else {
        $('#new-image-small').text('');
        nameImage = document.getElementById('val-new-img').files[0].name;
        image = document.getElementById('val-new-img').files[0];
        var extension = nameImage.split('.').pop().toLowerCase();
        if(jQuery.inArray(extension, ['gif','png','jpg','jpeg','avif','jfif','pjpeg','pjp']) == -1){
            $('#new-image-small').text('Not image');
            bool = false;
        }
        else {
            var oFReader = new FileReader();
            oFReader.readAsDataURL(document.getElementById('val-new-img').files[0]);
            var f = document.getElementById('val-new-img').files[0];
            var fsize = f.size||f.fileSize;
            if(fsize > 2000000) {
                $('#new-image-small').text('Image size is very big');
                bool = false;
            }
            else {
                $('#new-image-small').text('');
            }
        }
    }
    if (newOffer > 100) {
        $('#new-offer-small').text('Offer must be less than 100');
        bool = false;
    }
    else {
        $('#new-offer-small').text('');
    }
    if (bool == true) {
        var formData = new FormData();
        var num = 0;
        formData.append("itemName",itemName);
        if (newItemName != '') {
            formData.append("newItemName",newItemName);
            num++;
        }
        if (newModel != '') {
            formData.append("newModel",newModel);
            num++;
        }
        if (newCategory != '') {
            formData.append("newCategory",newCategory);
            num++;
        }
        if (newBrand != '') {
            formData.append("newBrand",newBrand);
            num++;
        }
        if (newQuantity != '') {
            formData.append("newQuantity",newQuantity);
            num++;
        }
        if (newPrice != '') {
            formData.append("newPrice",newPrice);
            num++;
        }
        if (newOffer != 0 ) {
            formData.append("newOffer",newOffer);
            num++;
        }
        if (newDescription != '') {
            formData.append("newDescription",newDescription);
            num++;
        }
        if (document.getElementById('val-new-img').files.length != 0) {
            console.log(image);
            formData.append("newImage",image);
            num++;
        }
        console.log('n : '+num+' r : '+r);
        if (num == 2 && r == 0) {
            
        }
        else {
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
                        document.getElementById('val-new-itemname').value = '';
                        document.getElementById('val-new-model').value = '';
                        document.getElementById('val-new-quantity').value = '';
                        document.getElementById('val-new-price').value = '';
                        document.getElementById('val-new-offer').value = 0;
                        document.getElementById('val-new-description').value = '';
                        document.getElementById('val-new-img').value = '';
                        $('.edit-category-class').prop('checked',false);
                        $('.edit-brand-class').prop('checked',false);
                        console.log("success");
                    }
                }
            }
            ajax.open("post", "phpFiles/updateItemsInformation.php");
            ajax.send(formData);
        }
    }
});