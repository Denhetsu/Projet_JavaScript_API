alert("Hello Leo ,its me again");
alert("..");

var bouton = document.getElementById("btn-search");
bouton.addEventListener("click",function(){
    var input = document.getElementById("add-ean");
    var EAN = input.value;
    
    alert(EAN);
});