//---HAMBURGER MENU---//

// Initializes all functions needed for page after document loads
function hideAboutElements() {
    $SHOW_MAP.hide();
    $EXIT_ICON.hide();
    $MENU_CONTAINER.hide();
    $(".click-to-close").hide();
}

function addAboutListeners() {
    clickMenuShow();
    clickExitButton();
    clickHideMap();
    clickShowMap();
}
// allows document to load before functions are called
$(document).ready(function() {
    hideAboutElements();
    addAboutListeners();
});






//---LOTTERY FUNCTIONALITY---//

//define a function that randomly generates a number from 1-69:
function randomFiveNumbers() {
    var fiveNumberArray = [];

    for(var i=0; i<=4; i++) {
        fiveNumberArray.push(Math.floor(Math.random() * 69))
    }
    return ("Your 5 numbers are: " + fiveNumberArray.join(", "));
}

//Access the button:
function getButton() {
    var button = document.querySelector(".pickNumberButton");
}

//Access the lottery box:
function getLottoBox() {
    var lottoBox = document.querySelector(".lotteryNumberContainer");
    getLotoBox.textContent = randomFiveNumbers();
}

//Create function that causes thing to happen when button is clicked:
function clickButton() {
    var clickMe = getButton();
    clickMe.addEventListener("click", function (event) {
        event.preventDefault();
});

};

clickButton();



