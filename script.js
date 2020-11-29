$(document).ready(function(){
    $(".myform").submit(function(e){
        e.preventDefault();
        var email = $("#email").val();
        var pass = $("#pwd").val();
        // writing Regex for email
        var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        // writing Regex for password
        var pass_regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        // checking email is valid or not
        if(email_regex.test(email)){
            // checking password is strong or not
            if(pass_regex.test(pass)){
                console.log(email+" "+pass);
            }else{
                console.log("error in password: password not storng");
            }
        }else{
            console.log("error in email");
        }
    }); 
});
