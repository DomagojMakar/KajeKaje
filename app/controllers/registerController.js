(function() {
    angular.module('jobsApp')
    .controller('RegisterController', function ($scope) {
    
    var username;
    var pw;
    var repeatpw;
    var email;

    var users = [];

    $(".kvadrat").on('click', function() {
        username = $(".user").val();
        pw = $(".pw").val();
        email = $(".email").val();
        repeatpw = $(".repeatpw").val();


        if(pw !== repeatpw){
            alert("Lozinke se ne podudaraju!");
        }else if(username == "" || pw == "" || email == "" || repeatpw == ""){
            alert("Niste ispunili sva polja");
            return;
        }else if(users.length == 0){
            users.push({
                    kIme: username,
                    kLozinka: pw,
                    kEmail: email
                });
            alert("Uspješno ste registrirani");
            return;
        }else{
            for(var i = 0; i < users.length; i++){
                if(users[i].kIme == username){
                    alert("Username već postoji");
                    return;
                }else if(users[i].kEmail == email){
                    alert("Već postoji korisnik registriran na navedeni mail");
                    return;
                }
            }
        }
        alert("Uspješno ste registrirani");
        users.push({
                    kIme: username,
                    kLozinka: pw,
                    kEmail: email
                });

    });

    }
}());