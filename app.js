let userScore = 0;
let compScore = 0;

let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]

};

const draw = () => {
    msg.innerText = "This was a drow,Tough compitition."
    msg.style.color = "blue";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        msg.innerText = `yeee!!! you won ${userChoice} beats ${compChoice}`;
        msg.style.color = "green";
        userScore++; //tracking user score
        uScore.innerText = userScore;
    }
    else {
        msg.innerText = `Oops!! you loose ${compChoice} beats your ${userChoice}, Try again`;
        msg.style.color = "red";
        compScore++; //tracking comp score
        cScore.innerText = compScore;
    }
}
const playGame = (userChoice) => {
    // generate computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice){
        draw();
    }
    else{
        let userWin = true;

        if (userChoice === "rock"){
            // papper, scissors
            userWin = compChoice === "paper" ? false : true; 
        }
        else if (userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;

        }

        showWinner (userWin,userChoice,compChoice);

    }
};

choices.forEach ((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});