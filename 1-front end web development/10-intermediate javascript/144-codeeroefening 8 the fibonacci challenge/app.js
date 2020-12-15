function fibonacciGenerator (n) {
    var list = [];
    var invoer = n;
    var nummer1 = 0;
    var nummer2 = 1;


    for (var i = 0; invoer > i; i++) {
        if (list.length == 0) {
            list.push(nummer1);
        }
        else if (list.length == 1) {
            list.push(nummer2);
        }
        else {
            nummer1 = list[list.length - 2];
            nummer2 = list[list.length - 1];

            list.push(nummer1 + nummer2);
        }
    }
    console.log(list);
}

fibonacciGenerator(7);