//FILE NAME: modular.js
//WRITTEN BY: Au-Dung Vuong
//WHEN: Oktober 2016
//PURPOSE: Kode for å gjøre navigasjonsbar og fotnoten modulær slik navigasjonsbaren og fotnoten er lik for alle sider
$(document).ready(function(){
    $.get("navbar.html", function(data){
        $("#header").html(data);
    });
});

$(document).ready(function(){
    $.get("footer.html", function(data){
        $("#footer").html(data);
    });
});
