
let playerName;
let numberOfRounds;

const gameChoices = ['Rock', 'Paper', 'Scissors']

let playerChoice;

let computerchoice;

let currentNumberOfRound;

let computerScore;

let playerScore;

let restart = 'Yes'

playerName =  prompt('What is your name? ');


//outer while loop to control the restart of the game
while (restart === 'Yes') {
    //restarts necessary variables if game restarted

    computerScore = 0;
    playerScore = 0;
    currentNumberOfRound = 0;
    numberOfRounds = prompt('How many rounds?');
    
      
   //inner loop while to control a single gamee
    while(currentNumberOfRound < numberOfRounds){
        computerchoice = gameChoices[Math.floor(Math.random() * gameChoices.length )]
        
         
        playerChoice = prompt(`Pick one 'Rock', 'Paper' 'Scissors'`);
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase()
        console.log(playerChoice)
    
        if(playerChoice === computerchoice){
    
            console.log(`It's a tie!`)
            console.log(`Computer choice: ${computerchoice} \n Player choice : ${playerChoice}`)
            console.log(`Computer Score : ${computerScore} \n ${playerName} : ${playerScore}`)
            numberOfRounds = numberOfRounds - 1;
            console.log(`number of rounds remaining : ${numberOfRounds}`)
    
        }else if (playerChoice == 'Rock' && computerchoice == 'Paper'
            || playerChoice == 'Paper' && computerchoice == 'Scissors' 
            || computerchoice == 'Rock' && playerChoice == 'Scissors' ){
            console.log('You loose!')
            console.log(`Computer choice: ${computerchoice} \n Player choice : ${playerChoice}`)
            computerScore += 1;
            console.log(`Computer Score : ${computerScore} \n ${playerName} : ${playerScore}`)
            numberOfRounds = numberOfRounds - 1;
            console.log(`number of rounds remaining : ${numberOfRounds}`)
    
        }else if(playerChoice == 'Paper' && computerchoice == 'Rock' 
            || playerChoice == 'Scissors' && computerchoice == 'Paper'
            || playerChoice == 'Rock' && computerchoice == 'Scissors'){
            console.log('You win!')
            console.log(`Computer choice: ${computerchoice} \n Player choice : ${playerChoice}`)
            playerScore += 1;
            console.log(`Computer Score : ${computerScore} \n ${playerName} : ${playerScore}`)
            numberOfRounds = numberOfRounds - 1;
            console.log(`number of rounds remaining : ${numberOfRounds}`)
        
        }
        
    }

    restart = prompt(`Do you want to restart the game? 'Yes', 'No'`)
    restart = restart.charAt(0).toUpperCase() + restart.slice(1).toLowerCase();
    
}





if(playerScore > computerScore){
    console.log('Hurray you win the game!🥳')
}else if (playerScore === computerScore){
    console.log('You tied! Try to get a better edge next time😂')
}else {
    console.log('Oops, You loose!😭')
}

