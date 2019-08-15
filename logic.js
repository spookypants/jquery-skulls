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
    return Math.floor(Math.random() * (min - max + 1)) + min;
};

var startGame = function() {
    currentScore = 0;
    targetScore = getRandom(15, 250);

    skull.one.value = getRandom(1, 15);
    skull.two.value = getRandom(1, 15);
    skull.three.value = getRandom(1, 15);

    $("#your-score").text(currentScore);
    $("#target-score").text(targetScore);

}