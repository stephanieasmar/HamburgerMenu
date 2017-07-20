
//define a function that 
function randomFiveNumbers() {
    var fiveNumberArray = [];

    for(var i=0; i<+4; i++) {
        fiveNumberArray.push(Math.floor(Math.random() * 69))
    }
    return ("Your 5 numbers are: " + fiveNumberArray.join(" "));
}

function randomTwoNumbers() {
    var twoNumberArray = [];

    for(var i=0; i<=1; i++) {
        ftwoNumberArray.push(Math.floor(Math.random() * 26))
    }
    return ("Your 2 numbers are: " + twoNumberArray.join(" "));
}



