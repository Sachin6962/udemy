var uitvoer = [];
var nummer = 1;

function fizzBuzz() {
    if (nummer % 3 == 0 && nummer % 5 == 0) {
        uitvoer.push("FizzBuzz");
    }
    else if (nummer % 3 == 0) {
        uitvoer.push("Fizz");
    } 
    else if (nummer % 5 == 0) {
            uitvoer.push("Buzz");
    }
    else {
        uitvoer.push(nummer);
    }
    nummer++;

    console.log(uitvoer);
}