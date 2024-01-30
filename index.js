const userInputRock = document.getElementById('userInputRock');
const userInputPaper = document.getElementById('userInputPaper');
const userInputScissor = document.getElementById('userInputScissor');

const PlayTheGame = (playerInput)=>{
    console.log(playerInput);
}

// if User choose rock
userInputRock.addEventListener('click',()=>{
    PlayTheGame('rock');
});

// if User choose paper
userInputPaper.addEventListener('click',()=>{
    PlayTheGame('paper');
});

// if User choose scissor
userInputScissor.addEventListener('click',()=>{
    PlayTheGame('scissor')
});