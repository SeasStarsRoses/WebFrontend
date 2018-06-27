var game;
var gamestate;
var currentQuestion;
// 0 = nextQuestion
// 1 = showAnswers


function init() {
    game = new Game();
    gamestate = 0;
    game.init();
    updatePoints();
    showNextQuestion();
 //   alert(game.getNextQuestion().getQuestion());
  //  game.getStatistics().updateStatsOne(100,0);
 //   game.getStatistics().updateStatsOne(75,75);
}

function buttonClick() {
    if (gamestate === 0){
        showNextQuestion();

    }  else {
        logIn();

    }
}

function showNextQuestion() {
    resetGui();

    currentQuestion = game.getNextQuestion();

    showQuestion(currentQuestion);
    showImage(currentQuestion);
    spreadAnswers(currentQuestion);
    gamestate = 1;

}

function logIn() {
    var totalOne = addValuesOne();
    var totalTwo = addValuesTwo();

    if (!checkForValidity(totalOne,totalTwo)) {
        return 0;
    }
    // collect Team Points
    var points = collectPoints(currentQuestion);
    // update stats
    game.getStatistics().updateStatsOne(points[0],0);
    game.getStatistics().updateStatsTwo(points[1],0);

    // highlight divs
    highlightAnswers(currentQuestion);

    // update Points
    updatePoints();
    gamestate = 0;

}

function spreadAnswers(cq) {
    // merge all answers
    var ar = [];
    ar = ar.concat(cq.getTrueAnswers());
    ar = ar.concat(cq.getWrongAnswers());

    // shuffe array
    shuffleArray(ar);

    // put answers in gui
    document.getElementById("a1").innerHTML = ar[0];
    document.getElementById("a2").innerHTML = ar[1];
    document.getElementById("a3").innerHTML = ar[2];
    document.getElementById("a4").innerHTML = ar[3];
}

function showQuestion(cq) {
    // show question
    document.getElementById("question").innerHTML= cq.getQuestion();
}

function showImage(cq) {
    // show image
    if (cq.hasMedia()){

        document.getElementById("image").src = cq.getMedia();
        document.getElementById("image").style.visibility = "visible";
    } else {
        document.getElementById("image").style.visibility = "hidden";
    }
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function resetGui() {
    document.getElementById("V1_One").value = "";
    document.getElementById("V1_Two").value = "";
    document.getElementById("V2_One").value = "";
    document.getElementById("V2_Two").value = "";
    document.getElementById("V3_One").value = "";
    document.getElementById("V3_Two").value = "";
    document.getElementById("V4_One").value = "";
    document.getElementById("V4_Two").value = "";

    document.getElementById("l1").style.backgroundColor = "dimgray";
    document.getElementById("l2").style.backgroundColor = "dimgray";
    document.getElementById("l3").style.backgroundColor = "dimgray";
    document.getElementById("l4").style.backgroundColor = "dimgray";
}

function addValuesOne() {
    var total = 0;
    var elements = [document.getElementById("V1_One"), document.getElementById("V2_One"), document.getElementById("V3_One"), document.getElementById("V4_One")];
    for (var i = 0; i < elements.length; i++){
        if (!(elements[i].value == "")){
            total += parseInt(elements[i].value);
        }
    }

    return total;
}

function addValuesTwo() {
    var total = 0;
    var elements = [document.getElementById("V1_Two"), document.getElementById("V2_Two"), document.getElementById("V3_Two"), document.getElementById("V4_Two")];
    for (var i = 0; i < elements.length; i++){
        if (!(elements[i].value == "")){
            total += parseInt(elements[i].value);
        }
    }

    return total;
}

function checkForValidity(totalOne, totalTwo) {
    if (game.getStatistics().getPointsOne() != totalOne ){
        alert("Team One, you have to spread all points! Expected: " +game.getStatistics().getPointsOne() + " | current: "+ totalOne );
        return false;
    }
    if (game.getStatistics().getPointsTwo() != totalTwo ){
        alert("Team Two, you have to spread all points! Expected: " +game.getStatistics().getPointsTwo + " | current: "+ totalTwo );
        return false;
    }
    return true;
}

function collectPoints(cq) {
    var pointsOne = 0;
    var pointsTwo = 0;

    var elementsOne = [];
    var elementsTwo = [];

    if (cq.isAnswerTrue(document.getElementById("a1").innerHTML)){
        elementsOne.push(document.getElementById("V1_One"));
        elementsTwo.push(document.getElementById("V1_Two"));
    }

    if (cq.isAnswerTrue(document.getElementById("a2").innerHTML)){
        elementsOne.push(document.getElementById("V2_One"));
        elementsTwo.push(document.getElementById("V2_Two"));
    }

    if (cq.isAnswerTrue(document.getElementById("a3").innerHTML)){
        elementsOne.push(document.getElementById("V3_One"));
        elementsTwo.push(document.getElementById("V3_Two"));
    }

    if (cq.isAnswerTrue(document.getElementById("a4").innerHTML)){
        elementsOne.push(document.getElementById("V4_One"));
        elementsTwo.push(document.getElementById("V4_Two"));
    }

    for (var i = 0; i < elementsOne.length; i++){
        if (!(elementsOne[i].value == "")){
            pointsOne += parseInt(elementsOne[i].value);
        }
    }
    for (var i = 0; i < elementsTwo.length; i++){
        if (!(elementsTwo[i].value == "")){
            pointsTwo += parseInt(elementsTwo[i].value);
        }
    }

    return [pointsOne,pointsTwo];
}

function highlightAnswers(cq) {
    if (cq.isAnswerTrue(document.getElementById("a1").innerHTML)){
        document.getElementById("l1").style.backgroundColor = "#00994c";
    }
    if (cq.isAnswerTrue(document.getElementById("a2").innerHTML)){
        document.getElementById("l2").style.backgroundColor = "#00994c";
    }
    if (cq.isAnswerTrue(document.getElementById("a3").innerHTML)){
        document.getElementById("l3").style.backgroundColor = "#00994c";
    }
    if (cq.isAnswerTrue(document.getElementById("a4").innerHTML)){
        document.getElementById("l4").style.backgroundColor = "#00994c";
    }
}

function updatePoints() {
    document.getElementById("PointsOne").innerHTML = game.getStatistics().getPointsOne();
    document.getElementById("DispoOne").innerHTML = game.getStatistics().getDispoOne();

    document.getElementById("PointsTwo").innerHTML = game.getStatistics().getPointsTwo();
    document.getElementById("DispoTwo").innerHTML = game.getStatistics().getDispoTwo();
}

function finishGame() {
    game.getStatistics().finalize();

    if (game.getStatistics().getPointsTwo() < game.getStatistics().getPointsOne()){
        document.getElementById("question").innerHTML = "Team One hat mit insgesamt " + game.getStatistics().getPointsOne() + " Punkten gewonnen!";
    } else if (game.getStatistics().getPointsTwo() == game.getStatistics().getPointsOne()){
        document.getElementById("question").innerHTML = "Unentschieden! Desch Brutal! Beide Teams haben " + game.getStatistics().getPointsTwo() + " Punkte!";
    } else {
        document.getElementById("question").innerHTML = "Team Two hat mit insgesamt " + game.getStatistics().getPointsTwo() + " Punkten gewonnen!";
    }
    resetGui();
    document.getElementById("image").style.visibility = "hidden";
    document.getElementById("button").style.visibility = "hidden";
    updatePoints();
}