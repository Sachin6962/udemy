function klik() {
    alert("ik ben geklikt!");
}

var buttons = document.querySelectorAll(".drum");
var i = 0

while (i < buttons.length) {
    buttons[i].addEventListener("click", klik);
    i++;
}