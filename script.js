console.log("page loaded...");

var user = document.querySelector("#avatar");
var request = document.querySelector("#requests");
var yourConnections = document.querySelector("#connections");

function changeUser() {
        user.innerText = "Sang Song";
}

function acceptUser(id) {
    var users = document.querySelector(id);
    users.remove();
    request.innerText--;
    yourConnections.innerText++;
}

function removeUser(id) {
    var users = document.querySelector(id);
    users.remove();
    request.innerText--;
}