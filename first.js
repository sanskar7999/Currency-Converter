uScore = 0;
comScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScore = document.querySelector("#user-score")
const compScore = document.querySelector("#computer-score")

const genCompChoice = () => {
    const options = ["rock" , "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "game was draw. Play again";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        uScore++
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
        userScore.innerText = uScore
    } else {
        comScore++
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
        compScore.innerText = comScore
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choise =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })

})