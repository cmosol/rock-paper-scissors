function computerPlay() {
    const entry = Math.floor(Math.random() * 3)+1;
    return translate(entry);
}

function playRound(player, computer) {
    console.log("player:"+ player+" computer:"+computer);
    if (player === computer) {
        console.log("Its a tie! "+player+ " matches " +computer+ "!");
        window.alert("Its a tie! "+player+ " matches " +computer+ "!");
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

    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let win = playRound(button.id, computerPlay());
            if (win===1){
                playerScore++;
                printScore(playerScore,computerScore);
                checkGameOver(playerScore, computerScore);
            }
            else if (win===2){
                computerScore++;
                printScore(playerScore,computerScore);
                checkGameOver(playerScore, computerScore);
            }
            else {
                printScore(playerScore,computerScore);
            }
        });
    });
}

function checkGameOver(ps,cs){
    if ((ps+cs) === 5){
        if (ps > cs){
            alert("Game over! You Win!");
        }
        else{
            alert("Game over! Computer Wins!");
        }
    }
}

function printScore(ps,cs){
    console.log("player:"+ps+" computer: "+cs);
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

game();



