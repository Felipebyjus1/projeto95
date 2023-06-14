function addUser(){
    var userName = document.getElementById("nomeUsuário").value
localStorage.setItem("usuário", userName)
window.location = "vcRoom.html"}