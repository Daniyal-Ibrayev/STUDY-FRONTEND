let form = document.getElementById("quizForm");

form.addEventListener("submit",(event) => {
    event.preventDefault();


    let q1Answer = document.querySelector('input[name="q1"]:checked');
    let q2Answer = document.querySelector('input[name="q2"]:checked');
    let q3Answer = document.querySelector('input[name="q3"]:checked');
    let yourName = document.getElementById("yourName")?.value;

    let score = 0;

    if (q1Answer && q1Answer.value == "correct") {
        score++; //score = score + 1;
    }

    if (q2Answer && q2Answer.value == "correct") {
        score++; //score = score + 1;
    }

    if (q3Answer && q3Answer.value == "correct") {
        score++; //score = score + 1;
    }

    let resultString = "";
    let resultColor = "";

    if (score == 3) {
        resultString = `Perfect score ${yourName}!`;
        resultColor = "green";
    }
    else {
        resultString = `Keep going ${yourName}!`;
        resultColor = "red";
    }

    let resultText = document.getElementById("resultText");
    resultText.innerText = resultString;
    resultText.style.color = resultColor;

    if (resultString !== "" && resultColor !== ""){
        let result = document.getElementById("result");
        result.style.visibility = "visible";
    }

    let resultPicture = document.getElementById("resultPicture");
    resultPicture.src = score === 3 
        ? './cat-smiling-cat.gif'
        : './besito-catlove.gif';

})