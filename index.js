const userInputRock = document.getElementById('userInputRock');
const userInputPaper = document.getElementById('userInputPaper');
const userInputScissor = document.getElementById('userInputScissor');

const computerInput = document.getElementById('computerInput');
const showStatus = document.getElementById('showStatus');
const userScore = document.getElementById('userScore');
const computerScore = document.getElementById('computerScore');

let playerScore = 0;
let computer_Score = 0;

// Variable
let allowedInput = ['rock', 'paper', 'scissor'];

const PlayTheGame = (playerInput) => {
    let computerChoice = allowedInput[Math.floor(Math.random() * 3)];
    computerInput.innerText = computerChoice;
    let result = '';

    if (playerInput === computerChoice) {
        result = `Its a tie`;
    } else {
        switch (playerInput) {
            case 'rock':
                if (computerChoice === 'scissor') {
                    result = 'You Win';
                    playerScore += 1;
                } else {//paper as choice of computer
                    result = 'Computer Win';
                    computer_Score++
                }
                break;

            case 'paper':
                if (computerChoice === 'scissor') {
                    result = 'Computer Win';
                    computer_Score += 1;
                } else {//rock as choice of computer
                    result = 'You Win';
                    playerScore++;
                }
                break;

            case 'scissor':
                if (computerChoice === 'rock') {
                    result = 'Computer Win';
                    computer_Score += 1;
                } else {//paper as choice of computer
                    result = 'You Win';
                    playerScore += 1;
                }
                break;
        }
        showStatus.classList.remove('green');
        showStatus.classList.remove('losse');
        showStatus.classList.remove('tie');
        switch (result.toLowerCase()) {
            case 'you win':
                showStatus.classList.add('green');
                showStatus.innerText = result;
                break;

            case 'computer win':
                showStatus.classList.add('losse');
                showStatus.innerText = result;
                break;

            case 'Its a tie':
                showStatus.classList.add('tie');
                showStatus.innerText = result;
                break;
            default:
                break;
        }
    }

    userScore.innerText = playerScore;
    computerScore.innerText = computer_Score;

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