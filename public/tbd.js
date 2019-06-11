var tbdMessage = function(){
    alert("This feature will be available soon!");
};

window.onload = function(){
    var newMusollah = document.getElementById("newMusollah").addEventListener('click', tbdMessage);
    var loginButton = document.getElementById("loginButton").addEventListener('click', tbdMessage);
};