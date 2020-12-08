$(document).ready(function(){
    $(".myform").submit(function(e){
        e.preventDefault();
        var email  = $("#email").val();
        var mobile  = $("#mobile").val();
        var pass  = $("#pwd").val();
        var name  = $("#name").val();

        var user_data = {
            "name":name,
            "email":email,
            "mobile":mobile,
            "password":pass,
            "type":"insert_data"
        }

        $.ajax({
           method:"POST",
           url:'server.php',
           data:user_data,
           success:function(val){
               console.log(val);
           }
        })


    });
});