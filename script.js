const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');
const choices = document.querySelectorAll('.choice');

let userScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
};

const getResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return "It's a draw!";
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);

        resultMessage.textContent = `${capitalize(userChoice)} vs ${capitalize(computerChoice)}. ${result}`;
        userScoreSpan.textContent = userScore;
        computerScoreSpan.textContent = computerScore;
    });
});

const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);
