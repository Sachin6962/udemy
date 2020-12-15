var kleuren = ["rood", "blauw", "groen", "geel"];
var gamePatroon = [];
var gebruikerPatroon = [];
var startGame = true;
var sluitGame = true;
var level = 0;

//  alle geluiden
var geluid1 = new Audio("sounds/rood.mp3");
var geluid2 = new Audio("sounds/blauw.mp3");
var geluid3 = new Audio("sounds/geel.mp3");
var geluid4 = new Audio("sounds/groen.mp3");
var geluid5 = new Audio("sounds/fout.mp3");

//  checkt invoer van gebruiker
function checkAntwoord(gebruikerInvoer) {
    if (gebruikerPatroon[gebruikerInvoer] === gamePatroon[gebruikerInvoer]) {
        if (gebruikerPatroon.length === gamePatroon.length) {
            setTimeout(voegToeAanPatroon, 1000);
        }
    }
    else {
        geluid5.play();
        $("body").addClass("game-over");
        $("h1").text("Game-over! Druk op een toets om te herstarten.");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        opnieuw();
    }
}

//  start de game
$("body").keypress(function() {
    if (startGame === true) {
        sluitGame = false;
        startGame = false;
        voegToeAanPatroon();
    }
    else {
        return;        
    }
});

//  genereert willekeurige kleuren en stopt ze in array
function voegToeAanPatroon() {
    gebruikerPatroon = [];
    var willekeurigNummer = Math.floor(Math.random() * 4);
    var nieuweKleur = kleuren[willekeurigNummer];
    gamePatroon.push(nieuweKleur);

    $("#" + nieuweKleur).fadeOut(100).fadeIn(100);
    level++;
    $("h1").text("Level " + level);

    geluid(kleuren[willekeurigNummer]);
}

//  pusht gekozen kleur (door gebruiker) naar array
$(".btn").click(function () {
    if (sluitGame === false) {
        var gekozenKleur = this.id;
        gebruikerPatroon.push(gekozenKleur);
    
        geluid(gekozenKleur);
        klikAnimatie(gekozenKleur);
        checkAntwoord(gebruikerPatroon.length - 1);
    }
    else {
        return;
    }
});

//  reset alle variabelen
function opnieuw() {
    gamePatroon = [];
    gebruikerPatroon = [];
    startGame = true;
    sluitGame = true;
    level = 0;
}

//  bepaald welk geluid wordt afgespeeld na klikken op knop
function geluid(naam) {
    switch (naam) {
        case "rood":
            geluid1.play();
            break;
        case "blauw":
            geluid2.play();
            break;
        case "geel":
            geluid3.play();
            break;
        case "groen":
            geluid4.play();
            break;
        default:
            break;
    }
}

//  animatie op knop tijdens klikken
function klikAnimatie(huidigeKleur) {
    $("#" + huidigeKleur).addClass("pressed");
    setTimeout(function () {
        $("#" + huidigeKleur).removeClass("pressed");
    }, 100);
}