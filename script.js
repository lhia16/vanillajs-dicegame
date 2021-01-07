const rollButton = document.getElementById("Roll");
let score = 0;
const scoreText = document.getElementById("score");
const diceImg = document.getElementById("image1");
const scoreNumber = document.getElementById("scoreNum");

// let randomNum = Math.floor(Math.random() * 6) + 1;

random = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum;
};

rollDice = () => {
    let num = random();
    diceImg.style.display = "block";
    diceImg.src = "./img/dice" + num + ".png";
    score += num;
    
    if (score == 1) {
        scoreText.innerHTML = "You lose!";
        scoreNumber.textContent = score;
        playAgain();
    } 
    else if (score < 20) {
        scoreText.textContent = "Score: ";
        scoreNumber.textContent = score;
    }
    else {
        scoreText.textContent = "You win!";
        scoreNumber.textContent = score;

        playAgain();
    }
};
 
playAgain = () => {
    score = 0;
    rollButton.textContent = "Play again?";
    
};

rollButton.addEventListener("click" , () => {
    if(rollButton.textContent == "Play again?") {
        rollButton.textContent = "Roll the Die!";
        scoreNumber.textContent = 0;
        scoreText.textContent = "Score: "

    }
    else {
        rollDice();
    }
}); 


