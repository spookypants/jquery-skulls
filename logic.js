var skull = {
    one:
    {
        name: "One",
        value: 0
    },
    two:
    {
        name: "Two",
        value: 0
    },
    three:
    {
        name: "Three",
        value: 0
    }
};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function() {
    currentScore = 0;
    targetScore = getRandom(15, 250);

    skull.one.value = getRandom(1, 15);
    skull.two.value = getRandom(1, 15);
    skull.three.value = getRandom(1, 15);

    $("#your-score").text(currentScore);
    $("#target-score").text(targetScore);

    console.log("-----------------------");
    console.log("Target Score: " + targetScore);
    console.log("One: " + skull.one.value + " | Two: " + skull.two.value + " | Three: " + skull.three.value);
    console.log("-----------------------");
};

var checkWin = function() {
    if (currentScore > targetScore) {
        alert("Sorry; now you'll be buried alive!");
        console.log("You suck");
        lossCount++;
        $("#loss-count").text(lossCount);
        startGame();
    } else if (currentScore === targetScore) {
        alert("Congratulations -- you survived!");
        console.log("You won... this time");
        winCount++;
        $("#win-count").text(winCount);
        startGame();
    }
};

var addValues = function(clickedSkull) {
    currentScore += clickedSkull.value;
    $("#your-score").text(currentScore);
    checkWin();
    console.log("Your Score: " + currentScore);
};

startGame();

$("#one").click(function() {
    addValues(skull.one);
});

$("#two").click(function() {
    addValues(skull.two);
});

$("#three").click(function() {
    addValues(skull.three);
});