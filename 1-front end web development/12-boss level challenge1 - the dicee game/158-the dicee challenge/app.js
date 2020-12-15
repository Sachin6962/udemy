var nummer;

function willekeurigNummer() {
    nummer = Math.floor(Math.random() * 6) + 1;
    return nummer;
}

function checkWieWint() {
    if (nummer1 > nummer2) {
        document.querySelector("h1").innerHTML = "Speler1 wint!"
    } else if (nummer2 > nummer1) {
        document.querySelector("h1").innerHTML = "Speler2 wint!"
    } else {
        document.querySelector("h1").innerHTML = "Gelijkspel.."
    }
}

document.querySelector(".img1").setAttribute("src", "images/dice" + willekeurigNummer() + ".png");
var nummer1 = nummer;

document.querySelector(".img2").setAttribute("src", "images/dice" + willekeurigNummer() + ".png");
var nummer2 = nummer;

checkWieWint();