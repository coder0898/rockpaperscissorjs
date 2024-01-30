const userInputRock = document.getElementById('userInputRock');
const userInputPaper = document.getElementById('userInputPaper');
const userInputScissor = document.getElementById('userInputScissor');

let playerScore = 0;
let computerScore = 0;

// Variable
let allowedInput = ['rock', 'paper', 'scissor'];

const PlayTheGame = (playerInput) => {
    let computerChoice = allowedInput[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerInput === computerChoice) {
        result = `Its a tie`;
    } else {
        switch (playerInput) {
            case 'rock':
                if (computerChoice === 'scissor') {
                    result = 'You Win';
                    playerScore+=1;
                } else {//paper as choice of computer
                    result = 'Computer Win';
                    computerScore++
                }
                break;

            case 'paper':
                if (computerChoice === 'scissor') {
                    result = 'Computer Win';
                    computerScore+=1;
                } else {//rock as choice of computer
                    result = 'You Win';
                    playerScore++;
                }
                break;

            case 'scissor':
                if (computerChoice === 'rock') {
                    result = 'Computer Win';
                    computerScore+=1;
                } else {//paper as choice of computer
                    result = 'You Win';
                    playerScore+=1;
                }
                break;
            default:
                break;
        }
    }

    console.log(playerInput);
    console.log(computerChoice);
    console.log(result);
    console.log(playerScore);
    console.log(computerScore);
}

// if User choose rock
userInputRock.addEventListener('click', () => {
    PlayTheGame('rock');
});

// if User choose paper
userInputPaper.addEventListener('click', () => {
    PlayTheGame('paper');
});

// if User choose scissor
userInputScissor.addEventListener('click', () => {
    PlayTheGame('scissor')
});