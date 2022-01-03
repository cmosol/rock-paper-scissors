function computerPlay() {
    const entry = Math.floor(Math.random() * 3)+1;
    return translate(entry);
}

function playRound(player, computer) {
    console.log("player:"+ player+" computer:"+computer);
    if (player === computer) {
        console.log("Its a tie! "+player+ " matches " +computer+ "!");
        window.alert("Its a tie! "+player+ " matches " +computer+ "!");
        return 0;
    }
    else {
        if (player ==='rock'&& computer === 'paper'){
                console.log("Computer wins! paper beats rock!");
                window.alert("Computer wins! paper beats rock!");
                return 2;
        } else if (player ==='paper' && computer ==='rock'){
                console.log("You win! paper beats rock!");
                window.alert("You win! paper beats rock!");
                return 1;
        } else if (player ==='paper' && computer ==='scissors'){
                console.log("Computer wins! scissors beats paper!");
                window.alert("Computer wins! scissors beats paper!");
                return 2;    
        } else if (player ==='rock' && computer ==='scissors'){
                console.log("You win! rock beats scissors!");
                window.alert("You win! rock beats scissors!");
                return 1;
        } else if (player ==='scissors' && computer ==='rock'){
                console.log("Computer wins! rock beats scissors!");
                window.alert("Computer wins! rock beats scissors!");
                return 2;
        } else if(player ==='scissors' && computer === 'paper'){
                console.log("You win! scissors beats paper!");
                window.alert("You win! scissors beats paper!");
                return 1;
        } else {
                throw "Invalid match"
        }
    }
}

function game(){
    let playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("enter your selection").toLowerCase();
        console.log(playerSelection);
        if (validate(playerSelection)){
            let win = playRound(playerSelection, computerPlay());
            if (win===0){
                i--;
            }
            else if (win===1){
                playerScore++;
            }
            else if (win===2){
                computerScore++;
            }
            else {
                throw "error retrieving score"
            }
        }
    }
    if (playerScore > computerScore){
        console.log("Game Over! You Win!");
        window.alert("Game Over! You Win!");
    }
    else{
        console.log("Game Over! Computer Wins!");
        window.alert("Game Over! Computer Wins!");
    }
}

function translate(entry){
    const dict = {
        1: "rock",
        2: "paper",
        3: "scissors"
    };
    if (typeof entry === "number"){
        return dict[entry];
    } else { 
        throw "parameter is not a valid entry (translate)";
    }
}

function validate(i) {
    const validArr = ["rock", "paper", "scissors"];
    if (validArr.indexOf(i) !== -1){
        return true;
    }
    else{
        throw "Invalid Entry. Expected: Rock, Paper, or Scissors";
    }
}

game();


