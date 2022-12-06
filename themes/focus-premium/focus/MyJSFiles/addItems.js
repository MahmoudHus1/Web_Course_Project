$(document).ready(function(){
    document.getElementById('val-itemname').value = '';
    document.getElementById('val-model').value = '';
    document.getElementById('val-quantity').value = '';
    document.getElementById('val-price').value = '';
    document.getElementById('val-offer').value = 0;
    document.getElementById('val-description').value = '';
    document.getElementById('val-img').value = '';
    $('#category-other').prop('checked',false);
    $('#brand-other').prop('checked',false);
})
// Add category
$('#add-category').click(function(){
    ac();
})
function ac() {
    var new_category = document.getElementById('name-new-category').value ;
    new_category = new_category.toLowerCase();
    if (new_category != '') {
        var formData = new FormData();
        formData.append('category',new_category);
        document.getElementById('name-new-category').value = '';
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
                    console.log('success');
                    gc();
                    ghc();
                }
            }
        }
        ajax.open("POST", "phpFiles/addCategory.php");
        ajax.send(formData);
    }
}
function ghc() {
    var myObj;
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            myObj = JSON.parse(this.responseText);
            var lengthJSON = Object.keys(myObj).length;
            var i = 0;
            $('#category').empty();
            if (myObj.status == '4') {
                swal({
                    icon: "error",
                    title: "error in connect",
                });
                console.log("error in connect");
            }
            else {
                while (lengthJSON > 0) {
                    var name = myObj[i].name;
                    name = name.charAt(0).toUpperCase() + name.slice(1);
                    $('#category').append('<div class="col-lg-3 col-sm-6">'
                        +'<div class="card" style="background-color: #6A5ACD;">'
                            +'<div class="stat-widget-two card-body">'
                                +'<div class="stat-content">'
                                    +'<div class="stat-text">'
                                        +'<a class="category" onclick="items(this.id)" href="#" id="'+myObj[i].name+'" style="color: #FFFFFF;">'
                                            +'<strong>'+name+'</strong>'+'</a>'
                                    +'</div>'
                                    +'</div>'
                                    +'</div>'
                                    +'</div>'
                                    +'</div>');
                    lengthJSON--;
                    i++;
                }
            }
        }
    }
    ajax.open("get", "phpFiles/getCategory.php");
    ajax.send();
}
function gc() {
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText == '0') {
                $('#category').append('<div class="stat-text">'+'<strong>'+'Not found categories'+'</strong>'+'</div>');
            }
            else {
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
                $('#category-list').empty();
                $('#edit-category-list').empty();
                while (lengthJSON > 0) {
                    var name = myObj[i].name;
                    name = name.charAt(0).toUpperCase() + name.slice(1);
                    if (myObj[i].name != 'other') {
                        $('#category-list').prepend(
                            '<div class="form-check">'
                            +'<input class="form-check-input category-class" type="radio" name="category-radio" value="'+myObj[i].id+'"/>'
                            +'<label class="form-check-label text-dark">'
                            +name
                            +'</label>'
                            +'</div>'
                        );  
                        $('#edit-category-list').prepend(
                            '<div class="form-check">'
                            +'<input class="form-check-input edit-category-class" type="radio" name="edit-category-radio" value="'+myObj[i].id+'"/>'
                            +'<label class="form-check-label text-dark">'
                            +name
                            +'</label>'
                            +'</div>'
                        );
                    }                                  
                    lengthJSON--;
                    i++;
                }
            }
            }
        }
    }
    ajax.open("get", "phpFiles/getCategory.php");
    ajax.send();
}
// Categories
$(document).ready(function() {
    var myObj;
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText == '0') {
                $('#category').append('<div class="stat-text">'+'<strong>'+'Not found categories'+'</strong>'+'</div>');
            }
            else {
                myObj = JSON.parse(this.responseText);
            var lengthJSON = Object.keys(myObj).length;
            var i = 0;
            $('#items').empty();
            if (myObj.status == '4') {
                swal({
                    icon: "error",
                    title: "error in connect",
                });
                console.log("error in connect");
            }
            else {
                while (lengthJSON > 0) {
                    var name = myObj[i].name;
                    name = name.charAt(0).toUpperCase() + name.slice(1);
                    if (myObj[i].name != 'other') {
                        $('#category-list').prepend(
                            '<div class="form-check">'
                            +'<input class="form-check-input category-class" type="radio" name="category-radio" value="'+myObj[i].id+'"/>'
                            +'<label class="form-check-label text-dark">'
                            +name
                            +'</label>'
                            +'</div>'
                        );  
                        $('#edit-category-list').prepend(
                            '<div class="form-check">'
                            +'<input class="form-check-input edit-category-class" type="radio" name="edit-category-radio" value="'+myObj[i].id+'"/>'
                            +'<label class="form-check-label text-dark">'
                            +name
                            +'</label>'
                            +'</div>'
                        );
                    }                                  
                    lengthJSON--;
                    i++;
                }
            }
            }
        }
    }
    ajax.open("get", "phpFiles/getCategory.php");
    ajax.send();
});
// Add brand
$('#add-brand').click(function(){
    var new_brand = document.getElementById('name-new-brand').value ;
    new_brand = new_brand.toLowerCase();
    if (new_brand != '') {
        document.getElementById('name-new-brand').value = '';
        var formData = new FormData();
        formData.append('brand',new_brand);
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
                    ab();
                    console.log("success");
                }
            }
        }
        ajax.open("post", "phpFiles/addBrand.php");
        ajax.send(formData);
    }
})
function ab() {
    var myObj;
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            myObj = JSON.parse(this.responseText);
            var lengthJSON = Object.keys(myObj).length;
            var i = 0;
            $('#brand-list').empty();
            $('#edit-brand-list').empty();
            if (myObj.status == '4') {
                swal({
                    icon: "error",
                    title: "error in connect",
                });
                console.log("error in connect");
            }
            else {
                while (lengthJSON > 0) {
                    var name = myObj[i].brand;
                    name = name.charAt(0).toUpperCase() + name.slice(1);
                    if (myObj[i].brand != 'other') {
                        $('#brand-list').prepend(
                            '<div class="form-check">'
                            +'<input class="form-check-input brand-class" type="radio" name="brand-radio" value="'+myObj[i].ID+'"/>'
                            +'<label class="form-check-label text-dark">'
                            +name
                            +'</label>'
                            +'</div>'
                        );
                        $('#edit-brand-list').prepend(
                            '<div class="form-check">'
                            +'<input class="form-check-input edit-brand-class" type="radio" name="edit-brand-radio" value="'+myObj[i].ID+'"/>'
                            +'<label class="form-check-label text-dark">'
                            +name
                            +'</label>'
                            +'</div>'
                        );  
                    }                                    
                    lengthJSON--;
                    i++;
                }
            }
        }
    }
    ajax.open("get", "phpFiles/getBrands.php");
    ajax.send();
}
// Brands
$(document).ready(function() {
    var myObj;
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            myObj = JSON.parse(this.responseText);
            var lengthJSON = Object.keys(myObj).length;
            var i = 0;
            $('#items').empty();
            if (myObj.status == '4') {
                swal({
                    icon: "error",
                    title: "error in connect",
                });
                console.log("error in connect");
            }
            else {
                while (lengthJSON > 0) {
                    var name = myObj[i].brand;
                    name = name.charAt(0).toUpperCase() + name.slice(1);
                    if (myObj[i].brand != 'other') {
                        $('#brand-list').prepend(
                            '<div class="form-check">'
                            +'<input class="form-check-input brand-class" type="radio" name="brand-radio" value="'+myObj[i].ID+'"/>'
                            +'<label class="form-check-label text-dark">'
                            +name
                            +'</label>'
                            +'</div>'
                        );
                        $('#edit-brand-list').prepend(
                            '<div class="form-check">'
                            +'<input class="form-check-input edit-brand-class" type="radio" name="edit-brand-radio" value="'+myObj[i].ID+'"/>'
                            +'<label class="form-check-label text-dark">'
                            +name
                            +'</label>'
                            +'</div>'
                        );  
                    }                                    
                    lengthJSON--;
                    i++;
                }
            }
        }
    }
    ajax.open("get", "phpFiles/getBrands.php");
    ajax.send();
});
// Add Item
$('#submit').click(function(){
    var bool = true;
    var name = document.getElementById('val-itemname').value;
    name = name.toLowerCase();
    var model = document.getElementById('val-model').value;
    model = model.toLowerCase();
    var quantity = document.getElementById('val-quantity').value;
    var price = document.getElementById('val-price').value;
    var offer = document.getElementById('val-offer').value;
    var description = document.getElementById('val-description').value;
    description = description.toLowerCase();
    var nameImage;
    var image;
    var category = document.getElementsByName('category-radio');
    var brand = document.getElementsByName('brand-radio');
    var c = 0;
    for (let index = 0; index < category.length; index++) {
        if (category[index].checked) {
            c++;
            category = category[index].value;
            category = category.toLowerCase();
            $('#small-category-radio').text('');
        }
    }
    if (c == 0) {
        $('#small-category-radio').text('Please select one');
        bool = false;
    }
    var b = 0;
    for (let index = 0; index < brand.length; index++) {
        if (brand[index].checked) {
            b++;
            brand = brand[index].value;
            brand = brand.toLowerCase();
            $('#small-brand-radio').text('');
        }
    }
    if (b == 0) {
        $('#small-brand-radio').text('Please select one');
        bool = false;
    }

    if (document.getElementById('val-img').files.length == 0) {
        $('#image-small').text('Please add an item image');
        bool = false;
    }
    else {
        $('#image-small').text('');
        nameImage = document.getElementById('val-img').files[0].name;
        image = document.getElementById('val-img').files[0];
        var extension = nameImage.split('.').pop().toLowerCase();
        if(jQuery.inArray(extension, ['gif','png','jpg','jpeg','avif','jfif','pjpeg','pjp']) == -1){
            $('#image-small').text('Not image');
            bool = false;
        }
        else {
            var oFReader = new FileReader();
            oFReader.readAsDataURL(document.getElementById('val-img').files[0]);
            var f = document.getElementById('val-img').files[0];
            var fsize = f.size||f.fileSize;
            if(fsize > 2000000) {
                $('#image-small').text('Image size is very big');
                bool = false;
            }
            else {
                $('#image-small').text('');
            }
        }
    }
    if (name == '') {
        $('#itemname-small').text('Please enter an item name');
        bool = false;
    }
    else {
        $('#itemname-small').text('');
    }
    if (quantity == '') {
        $('#quantity-small').text('Please enter an item quantity');
        bool = false;
    }
    else {
        $('#quantity-small').text('');
    }
    if (price == '') {
        $('#price-small').text('Please enter an item price');
        bool = false;
    }
    else {
        $('#price-small').text('');
    }
    if (offer > 100) {
        $('#offer-small').text('Offer must be less than 100');
        bool = false;
    }
    else {
        $('#offer-small').text('');
    }
    if (bool == true) {
        var formData = new FormData();
        formData.append("name",name);
        formData.append("model",model);
        formData.append("category",category);
        formData.append("brand",brand);
        formData.append("quantity",quantity);
        formData.append("price",price);
        formData.append("image",image);
        if (offer != 0 ) {
            formData.append("offer",offer);
        }
        if (description != '') {
            formData.append("description",description);
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
                    document.getElementById('val-itemname').value = '';
                    document.getElementById('val-model').value = '';
                    document.getElementById('val-quantity').value = '';
                    document.getElementById('val-price').value = '';
                    document.getElementById('val-offer').value = 0;
                    document.getElementById('val-description').value = '';
                    document.getElementById('val-img').value = '';
                    $('.category-class').prop('checked', false);
                    $('.brand-class').prop('checked',false);
                    console.log("success");
                }
            }
        }
        ajax.open("post", "phpFiles/addItems.php");
        ajax.send(formData);
    }
});

// check Items name
$(document).ready(function() {
$('#name').keyup(function() {
    var name = document.getElementById('name').value;
    var formData = new FormData();
    formData.append("name",name);
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
                if (myObj.status == '8') {
                    $('#name-small').css('color','red');
                    $('#name-small').text('item is already exist');
                    console.log("item is already exist");
                }
                else {
                    $('#name-small').text('');
                    console.log("success");
                }
            }
        }
    }
    ajax.open("post", "phpFiles/checkItems.php");
    ajax.send(formData);
});
});