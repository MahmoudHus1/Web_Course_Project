$('#reset-pass').click(function(){
    $.get( "./page-register.html", function(data) {
        $( "#body" ).html(data);
    });
});