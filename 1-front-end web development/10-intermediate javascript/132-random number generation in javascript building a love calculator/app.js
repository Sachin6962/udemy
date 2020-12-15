function liefdePercentage() {
    var x = Math.random();
    x = x * 100;
    x = Math.floor(x) + 1;
    return "Het percentage aan liefde tussen " + persoon1 + " en " +
    persoon2 + " is " + x + "%";
}

var persoon1 = prompt("wat is je naam?");
var persoon2 = prompt("wat de andere naam?");
alert(liefdePercentage());