var gasten = ["sachil", "ajay", "jack", "sachin", ];

function checkGast() {
    if (gasten.includes(invoer)) {
        alert("welkom! kom verder!");
    } else {
        alert("je bent niet uitgenodigd. ga weg.")
    }
}

var invoer = prompt("heey, wat is je naam?");
checkGast();