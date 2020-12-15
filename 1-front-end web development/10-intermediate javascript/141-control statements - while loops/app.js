function bier() {
    var i = 99;
    var tekst = "";
    while (i > 0) {
        tekst = i + " bottles of beer on the wall, " + i + " bottles of beer." +
        " Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall";
        console.log(tekst);
        i--;
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer." + 
    " Go to the store and buy some more, 99 bottles of beer on the wall.");
}