function checkQuiz() {
    let btn = $("#check");
    let answerImageResult = $(".answerImageResult");
    let rightAnswer =
        '<img src="https://www.pngkit.com/png/full/12-120360_check-mark-right-and-wrong-signs-png.png">';
    let wrongAnswer =
        '<img src="https://uploads-ssl.webflow.com/5b8a7f65d347287f54c8abd6/5bc3361d898dce8d5ebd9029_wrong_1275776.png">';

    btn.on("click", function () {
        let answer1 = document.quiz.question1.value;
        let answer2 = document.quiz.question2.value;
        let answer3 = document.quiz.question3.value;
        let answer4 = document.quiz.question4.value;
        let answer5 = document.quiz.question5.value;
        let answer6 = document.quiz.question6.value;
        let answer7 = document.quiz.question7.value;
        let answer8 = document.quiz.question8.value;
        let answer9 = document.quiz.question9.value;
        let answer10 = document.quiz.question10.value;
        let correct = 0;
        let sum = 10;

        answerImageResult.empty();
        if (answer1 === "1") {
            document.querySelector("#result").style.display = "block";
            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points";
            answerImageResult.append(rightAnswer);
        } else {
            answerImageResult.append(wrongAnswer);
        }

        if (answer2 === "3") {
            document.querySelector("#result").style.display = "block";
            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points";
            answerImageResult.append(rightAnswer);
        } else {
            answerImageResult.append(wrongAnswer);
        }

        if (answer3 === "4") {
            document.querySelector("#result").style.display = "block";
            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points";
            answerImageResult.append(rightAnswer);
        } else {
            answerImageResult.append(wrongAnswer);
        }
        if (answer4 === "3") {
            document.querySelector("#result").style.display = "block";
            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points";
            answerImageResult.append(rightAnswer);
        } else {
            answerImageResult.append(wrongAnswer);
        }
        if (answer5 === "2") {
            document.querySelector("#result").style.display = "block";
            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points";
            answerImageResult.append(rightAnswer);
        } else {
            answerImageResult.append(wrongAnswer);
        }
        if (answer6 === "1") {
            document.querySelector("#result").style.display = "block";
            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points";
            answerImageResult.append(rightAnswer);
        } else {
            answerImageResult.append(wrongAnswer);
        }
        if (answer7 === "4") {
            document.querySelector("#result").style.display = "block";
            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points";
            answerImageResult.append(rightAnswer);
        } else {
            answerImageResult.append(wrongAnswer);
        }
        if (answer8 === "1") {
            document.querySelector("#result").style.display = "block";
            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points";
            answerImageResult.append(rightAnswer);
        } else {
            answerImageResult.append(wrongAnswer);
        }
        if (answer9 === "3") {
            document.querySelector("#result").style.display = "block";
            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points";
            answerImageResult.append(rightAnswer);
        } else {
            answerImageResult.append(wrongAnswer);
        }
        if (answer10 === "2") {
            document.querySelector("#result").style.display = "block";
            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points";
            answerImageResult.append(rightAnswer);
        } else {
            answerImageResult.append(wrongAnswer);
        }

        if (correct == 0) {
            document.querySelector("#result").style.display = "block";

            document.querySelector("#resultCounter").innerHTML =
                "You got no correct answer!"
        }
    });
}

function restartPage() {
    let restartBtn = $('#restart');
    restartBtn.on('click', function () {
        location.reload()
        window.location = "./trivia.html#header";
    })
}
restartPage();
checkQuiz();