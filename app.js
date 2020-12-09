//Cache the Dom, storing the elements in variables for future use.
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function computerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return 'Rock'
    if (letter === 'p') return 'Paper'
    if (letter === 's') return 'Scissors'
}

function win(user, computer) {
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(user) + " Beats " + convertToWord(computer) + ' YOU WIN! 🔥';
    userChoice_div.classList.add("green-glow");
    setTimeout(function() { userChoice_div.classList.remove("green-glow")}, 500);
}

function lose(user, computer) {
    const userChoice_div = document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(user) + " Loses To " + convertToWord(computer) + ' YOU LOST! 💩';
    userChoice_div.classList.add("red-glow");
    setTimeout(function() { userChoice_div.classList.remove("red-glow")}, 500);
}

function draw(user, computer) {
    const userChoice_div = document.getElementById(user);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(user) + " Is Equal To " + convertToWord(computer) + ' DRAW! 🥺';
    userChoice_div.classList.add("gray-glow");
    setTimeout(function() { userChoice_div.classList.remove("gray-glow")}, 500);
}

function game(userChoice) {
    const computersChoice = computerChoice();
    switch (userChoice + computersChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computersChoice);
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computersChoice);
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computersChoice);
            break

    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p");
    })
    scissors_div.addEventListener('click', function () {
        game("s");
    })
}
main()