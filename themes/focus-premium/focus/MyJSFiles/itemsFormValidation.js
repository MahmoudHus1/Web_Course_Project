jQuery(".form-item").validate({
    rules: {
        "val-itemname": {
            required: !0,
        },
        "val-quantity": {
            required: !0,
        },
        "val-price": {
            required: !0,
            max: 100,
        },
        "val-img": {
            required: !0,
        }
    },
    messages: {
        "val-itemname": {
            required: "Please enter an item name",
            minlength: "Your username must consist of at least 3 characters"
        },
        "val-quantity": {
            required: "Please enter an item quantity"
        },
        "val-price": {
            required: "Please enter an item price",
            max: "Number must be less than 100"
        },
        "val-img": {
            required: "Please add an item image",
        }
    },

    ignore: [],
    errorClass: "invalid-feedback animated fadeInUp",
    errorElement: "div",
    errorPlacement: function(e, a) {
        jQuery(a).parents(".form-group > div").append(e)
    },
    highlight: function(e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
    },
    success: function(e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid"), jQuery(e).remove()
    },
});