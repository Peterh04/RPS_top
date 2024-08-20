/*Create a variable of playerName of type string */
let playerName;

/*Create a variable of number of rounds of type Number */
let numberOfRounds;

/*Create array of game choices */
const gameChoices = ['Rock', 'Paper', 'Scissors']

/*Create a variable of playerChoice of type string */
let playerChoice;

/*create a variable of computerchoice of type string  with random values of gameChoices assigned to it*/
let computerchoice;

/*Create a variable of current number of round and assign 1 */
let currentNumberOfRound;

/*Create a variable for Computer score of type number */
let computerScore;

/*Create a variable for Player score of type number */
let playerScore;


//Create a variable for restart with yes  assigned to it
let restart = 'Yes'

// ask the user the name and assign to playerName
playerName =  prompt('What is your name? ');


//outer while loop to control the restart of the game
while (restart === 'Yes') {
    //restart necessary variables if game restarted

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



/*Create a restart game choice array */

/*Create a variable to track restart game choice */

if(playerScore > computerScore){
    console.log('Hurray you win the game!🥳')
}else if (playerScore === computerScore){
    console.log('You tied! Try to get a better edge next time😂')
}else {
    console.log('Oops, You loose!😭')
}

