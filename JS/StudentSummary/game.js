var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.init = function () {
        this.questionArray = new Array();
        // init questions
        this.questionArray[0] = new Question("Dies ist eine Testfrage!", ["richtig", "richtig"], ["falsch", "falsch"], "test.jpg");
        this.questionArray[1] = new Question("Wozu benutzt man CSS?", ["Trennung von Logik und Präsentation"], ["Berechnung von Feldinhalten", "Zur Versionierung von HTML-Dateien", "Zur schnelleren Kompilierung von HTML"], null);
        this.questionArray[2] = new Question("Welche Arten bestehen bezüglich der Einbindung von CSS?", ["Inline-Style", "Internal Style", "External Style"], ["Extended Style"], null);
        this.questionArray[3] = new Question("Welchen Wert hat b?", ["true"], ["false", "undefined", "null"], "Aufgabe18.PNG");
        this.questionArray[4] = new Question("Was bedeutet Kaskadierung in Bezug auf CSS?", ["Zusammenwirken mehrerer Stylesheets"], ["Festlegen globaler Variablen", "Anlegen von ID-Elementen", "Bearbeiten mehrerer Elemente durch Class-Tags"], null);
        this.questionArray[5] = new Question("Wie viele Syntaxfehler enthält folgender Ausdruck?", ["Einen"], ["Zwei", "Drei", "Keinen"], "Aufgabe4.PNG");
        this.questionArray[6] = new Question("Wie wird eine Klasse in CSS angesprochen?", [".NameDerKlasse"], ["#NameDerKlasse", ":NameDerKlasse", "NameDerKlasse"], null);
        this.questionArray[7] = new Question("Was wird in JavaScript by Reference übergeben?", ["Date"], ["String", "Null", "Number"], null);
        this.questionArray[8] = new Question("Welcher RGB-Farbcode stellt die Farbe GELB dar?", ["255,255,0"], ["255,0,0", "255,0,255", "0,255,255"], null);
        this.questionArray[9] = new Question("Wer hat JavaScript erfunden?", ["Brendan Eich"], ["Steve Jobs", "Sergey Brin", "Bill Gates"], null);
        this.questionArray[10] = new Question("Welche Funktion hat der folgende Befehl?", ["Er spricht das letzte Element von &lt;p&gt; innerhalb einer Dokumentenstruktur an"], ["Den Befehl gibt es nicht", "Er spricht immer das allerletzte Element von &lt;p&gt; an", "Er verlinkt das letzte Element von &lt;p&gt;"], "Aufgabe7.PNG");
        this.questionArray[11] = new Question("Welcher Log-Level existiert in JavaScript standardmäßig nicht?", ["Attention"], ["Debug", "Warning", "Fatal"], null);
        this.questionArray[12] = new Question("Wie kann ich den Inhalt eines Objekts mittels JSON auslesen?", ["alert('person.nachname')"], ["alert('nachname')", "alert('person')", "alert('txt')"], "Aufgabe8.png");
        this.questionArray[13] = new Question("Welche Ausgabe erzeugt folgender Befehl?", ["Ein Rechteck", "Ein Quadrat"], ["Einen Kreis", "Eine Linie"], "Aufgabe9.PNG");
        this.questionArray[14] = new Question("Welchen Datentypen gibt es in JavaScript nicht?", ["Integer"], ["Number", "Logical", "String"], null);
        this.questionArray[15] = new Question("Was ist das Hauptmerkmal von Responsive Design?", ["Anpassung der Inhalte auf die Bildschirmgröße"], ["schnellere Antwortzeit des Servers", "schnellere Kompilierung des Codes", "Möglichkeit der dynamischen Veränderung der Webiste über die Konsole"], null);
        this.questionArray[16] = new Question("Welche Ausgabe liefert folgender Befehl?", ["30"], ["3", "377", "37-7"], "Aufgabe11.PNG");
        this.questionArray[17] = new Question("Welche Länge hat das folgende Array nach der Operation?", ["5"], ["4", "3", "Den Befehl gibt es nicht"], "Aufgabe12.PNG");
        this.questionArray[18] = new Question("Wie viele Syntaxfehler enthält dieser Ausdruck?", ["0"], ["1", "2", "3"], "Aufgabe17.PNG");
        this.questionArray[19] = new Question("Wie sieht das Array nach dem folgenden Befehl aus?", ["[volkswagen, audi, skoda, dacia]"], ["[volkswagen, audi, skoda]", "[dacia, volkswagen, audi, skoda]", "[volkswagen, audi, dacia, skoda]"], "Aufgabe13.PNG");
        this.questionArray[20] = new Question("Wie kann nachfolgende Funktion aufgerufen werden", ["quadrieren(zahl);"], ["quadrieren[zahl];", "function(zahl);", "Das Aufrufen ist nicht möglich"], "Aufgabe14.PNG");
        this.questionArray[21] = new Question("Wie viele Türen hat der Bus gemäß der Ausgabe?", ["3"], ["2", "4", "Die Ausgabe wird scheitern"], "Aufgabe15.PNG");
        this.questionArray[22] = new Question("Was ist der Unterschied zwischen '==' und '===' in JavaScript?", ["'==' ist wahr, wenn Operanden gleich sind <br> '===' ist wahr, wenn Operanden gleich sind und vom selben Typ sind"], ["'===' gibt es nur in TypeScript", "'==' ist wahr, wenn Operanden gleich sind und vom selben Typ sind <br> '===' ist wahr, wenn Operanden gleich sind ", "Es gibt keinen Unterschied"], null);
        // init stats
        this.myStats = new Stats(100, 100);
    };
    Game.prototype.getNextQuestion = function () {
        Game.currentQuestionIndex++;
        return this.questionArray[Game.currentQuestionIndex];
    };
    Game.prototype.getStatistics = function () {
        return this.myStats;
    };
    Game.currentQuestionIndex = -1;
    return Game;
}());
var Question = /** @class */ (function () {
    function Question(q, trueA, wrongA, media) {
        this.question = q;
        this.trueAnswers = trueA;
        this.wrongAnswers = wrongA;
        this.media = media;
    }
    Question.prototype.getQuestion = function () {
        console.log(this.question);
        return this.question;
    };
    Question.prototype.getTrueAnswers = function () {
        console.log(this.trueAnswers);
        return this.trueAnswers;
    };
    Question.prototype.getWrongAnswers = function () {
        console.log(this.wrongAnswers);
        return this.wrongAnswers;
    };
    Question.prototype.getMedia = function () {
        console.log(this.media);
        return this.media;
    };
    Question.prototype.hasMedia = function () {
        if (this.media == null) {
            return false;
        }
        else {
            return true;
        }
    };
    Question.prototype.isAnswerTrue = function (str) {
        return this.trueAnswers.indexOf(str) > -1;
    };
    return Question;
}());
var Stats = /** @class */ (function () {
    function Stats(startPointsOne, startPointsTwo) {
        this.dispoOne = 0;
        this.dispoTwo = 0;
        this.pointsOne = startPointsOne;
        this.pointsTwo = startPointsTwo;
    }
    Stats.prototype.updateStatsOne = function (pointsOnTrue, pointsOnFalse) {
        if (pointsOnTrue + pointsOnFalse != this.pointsOne) {
            // team hasn't set all points
        }
        if (pointsOnTrue * Stats.factor > 0 && this.dispoOne < 0) {
            // user has a dispo
            if (this.dispoOne + pointsOnTrue * Stats.factor >= 0) {
                // user gets out of dispo
                this.pointsOne += Math.round((pointsOnTrue * Stats.factor) + this.dispoOne);
                this.dispoOne = 0;
                console.log("Congratulations! Team One got out of dispo!");
            }
            else {
                // user is still in dispo
                this.pointsOne = Math.round(pointsOnTrue);
                this.dispoOne += Math.round(pointsOnTrue * Stats.factor);
                console.log("Team One descreased Dispo by " + Math.round(pointsOnTrue * Stats.factor));
                console.log("Team One new Dispo: " + this.dispoOne);
            }
        }
        else {
            // user has no dispo
            this.pointsOne = Math.round(pointsOnTrue * (1 + Stats.factor));
        }
        if (this.pointsOne === 0) {
            this.dispoOne += -Math.round(Stats.defaultdispo);
            this.pointsOne = Math.round(Stats.defaultdispo);
            console.log("Team One new Dispo: " + this.dispoOne);
        }
        console.log("One: Updates Points: " + this.pointsOne);
    };
    Stats.prototype.updateStatsTwo = function (pointsOnTrue, pointsOnFalse) {
        if (pointsOnTrue + pointsOnFalse != this.pointsTwo) {
            // team hasn't set all points
        }
        if (pointsOnTrue * Stats.factor > 0 && this.dispoTwo < 0) {
            // user has a dispo
            if (this.dispoTwo + pointsOnTrue * Stats.factor >= 0) {
                // user gets out of dispo
                this.pointsTwo += Math.round((pointsOnTrue * Stats.factor) + this.dispoTwo);
                this.dispoTwo = 0;
                console.log("Congratulations! Team Two got out of dispo!");
            }
            else {
                // user is still in dispo
                this.pointsTwo = Math.round(pointsOnTrue);
                this.dispoTwo += Math.round(pointsOnTrue * Stats.factor);
                console.log("Team Two descreased Dispo by " + Math.round(pointsOnTrue * Stats.factor));
                console.log("Team Two new Dispo: " + this.dispoTwo);
            }
        }
        else {
            // user has no dispo
            this.pointsTwo = Math.round(pointsOnTrue * (1 + Stats.factor));
        }
        if (this.pointsTwo === 0) {
            this.dispoTwo += -Stats.defaultdispo;
            this.pointsTwo = Stats.defaultdispo;
            console.log("Team Two new Dispo: " + this.dispoTwo);
        }
        console.log("Two: Updates Points: " + this.pointsTwo);
    };
    Stats.prototype.finalize = function () {
        this.pointsOne += this.dispoOne;
        this.pointsTwo += this.dispoTwo;
        this.dispoOne = 0;
        this.dispoTwo = 0;
    };
    Stats.prototype.getPointsOne = function () {
        return this.pointsOne;
    };
    Stats.prototype.getPointsTwo = function () {
        return this.pointsTwo;
    };
    Stats.prototype.getDispoOne = function () {
        return this.dispoOne;
    };
    Stats.prototype.getDispoTwo = function () {
        return this.dispoTwo;
    };
    Stats.factor = 0.5;
    Stats.defaultdispo = 100;
    return Stats;
}());
