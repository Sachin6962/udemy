function klik() {
    this.style.color = "grey";
}

var buttons = document.querySelectorAll(".drum");
var i = 0

while (i < buttons.length) {
    buttons[i].addEventListener("click", klik);
    i++;
}

// var audio  = new Audio("sounds/tom-1.mp3");
//     audio.play();