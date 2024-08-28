
const buttons = document.querySelectorAll('button');
const roundNumbers = document.querySelector('.roundNumbers');
const compScore  = document.querySelector('.compScore');
const playScore = document.querySelector('.playerScore');
const compChoice = document.querySelector('.compChoice');
const playChoice = document.querySelector('.playChoice');
const roundMessage = document.querySelector('.roundMessage');
const finalMessage = document.querySelector('.finalMessage');
const replayModal = document.querySelector('.replayModal');
const playAgainBtn = document.querySelector('#playAgainBtn');




// let playerName;

const gameChoices = ['Rock', 'Paper', 'Scissors']

let playerChoice;

let computerchoice;

let currentNumberOfRound = 0;

let numberOfRounds = Number(prompt('How many rounds do you want to play? '))


let computerScore = 0;

let playerScore = 0;



roundNumbers.textContent = numberOfRounds;
compScore.textContent = 0;
playScore.textContent = 0;



function showReplayModal() {
    replayModal.style.visibility = 'visible';
    
}

function hideReplayModal() {
    replayModal.style.visibility= 'hidden';
}




buttons.forEach((btn)=>{
    btn.classList ='btn';
    btn.addEventListener('click', ()=>{
        btn.classList.add('animate');
        
        setTimeout(()=>{
            btn.classList.remove('animate')
        }, 200)
    })

})

playAgainBtn.addEventListener('click', ()=>{
    
})


buttons.forEach((btn)=>{
     btn.addEventListener('click', ()=>{
        playerChoice = btn.id;
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();

        computerchoice = gameChoices[Math.floor(Math.random() * gameChoices.length )];

        playChoice.textContent = playerChoice;
        compChoice.textContent = computerchoice;

        

        if(playerChoice === computerchoice){
            roundMessage.textContent= `It's a tie!`;
            numberOfRounds = numberOfRounds - 1;
            roundNumbers.textContent = numberOfRounds
             }
            
            else if (playerChoice == 'Rock' && computerchoice == 'Paper'
                || playerChoice == 'Paper' && computerchoice == 'Scissors' 
                || computerchoice == 'Rock' && playerChoice == 'Scissors' ){
                roundMessage.textContent = 'You loose!';
              
               
                numberOfRounds = numberOfRounds - 1;
                roundNumbers.textContent = numberOfRounds

                computerScore = computerScore + 1;
                compScore.textContent = computerScore;

                
        
            }
            else if(playerChoice == 'Paper' && computerchoice == 'Rock' 
                || playerChoice == 'Scissors' && computerchoice == 'Paper'
                || playerChoice == 'Rock' && computerchoice == 'Scissors'){
                roundMessage.textContent = 'You win!';
                

                numberOfRounds = numberOfRounds - 1;
                roundNumbers.textContent = numberOfRounds

                playerScore = playerScore + 1;
                playScore.textContent = playerScore;

            
            }
            
            if(numberOfRounds == 0){
                if(playerScore > computerScore){
                        finalMessage.textContent= 'Hurray you win the game!🥳'
                    }else if (playerScore === computerScore){
                        finalMessage.textContent = 'You tied! Try to get a better edge next time😂'
                    }else {
                        finalMessage.textContent = 'Oops, You loose!😭'
                    }
            }
            if(numberOfRounds < 0){
            
               
               
                let restart = confirm('Do you want to restart the game? ')

                
                if (restart) {
                   
                    numberOfRounds = prompt('How many rounds do you want to play? ');
                    roundNumbers.textContent = numberOfRounds;
                    finalMessage.textContent = '';
                    compScore.textContent = 0;
                    playScore.textContent = 0;
                    playChoice.textContent = '';
                    compChoice.textContent = '';
                    roundMessage.textContent = '';
                    computerScore = 0;
                    playerScore = 0;
                    currentNumberOfRound = 0;
                }else{
                    
                    numberOfRounds = 0;
                    roundNumbers.textContent = numberOfRounds;
                    finalMessage.textContent = '';
                    compScore.textContent = 0;
                    playScore.textContent = 0;
                    playChoice.textContent = '';
                    compChoice.textContent = '';
                    roundMessage.textContent = '';
                    computerScore = 0;
                    playerScore = 0;
                    currentNumberOfRound = 0;
                }
                
            }else if(numberOfRounds > 20){
                numberOfRounds = 0;
                roundNumbers.textContent = 0;
                finalMessage.textContent = '';
                compScore.textContent = 0;
                playScore.textContent = 0;
                playChoice.textContent = '';
                compChoice.textContent = '';
                roundMessage.textContent = '';
                computerScore = 0;
                playerScore = 0;
                currentNumberOfRound = 0;
                alert('Pity yourself that is much!😭')
                    
            }
            
                        
  
    })
})

