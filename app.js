/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, die, dieDom, gameActive;

function newGame() {
    //scores = [0, 0];
    //roundScore = 0;
    activePlayer = 0;
    dieDOM = document.querySelector('.dice');
    dieDOM.style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    switchActive(0);
    gameActive = true;
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (!gameActive) {
        // do nothing
    }
    else {
        var currentScoreDOM = document.querySelector('#current-' + activePlayer);

        var die = Math.floor(Math.random() * 6) + 1;

        dieDOM.style.display = 'block';
        dieDOM.src = 'dice-' + die + '.png';

        if (die === 1) {
            currentScore = 0;
            // force to next player's turn?
            //switchPlayer();
        } else {
            currentScore = parseInt(currentScoreDOM.textContent);
            currentScore += die;     
        }
        currentScoreDOM.innerHTML = '<em>' + currentScore + '</em>';
    }
});

function switchPlayer() {
    if (!gameActive) {
        // do nothing
    } else {
        var currentScoreDOM = document.querySelector('#current-' + activePlayer);
        var scoreDOM = document.querySelector('#score-' + activePlayer);
        var score = parseInt(scoreDOM.textContent);
        score += parseInt(currentScoreDOM.textContent);
        scoreDOM.textContent = score;

        currentScoreDOM.textContent = 0;

        if (score >= 20) {
            document.getElementById('name-' + activePlayer).innerHTML = '<b> <p style="color:red">' + 'WINNER!' + '</p></b>';
            gameActive = false;
        } else {
            switchActive();
        }
    }

}

function switchActive(playerNum) {
    if (typeof playerNum === 'undefined') { 
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        activePlayer = (activePlayer + 1) % 2;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    } else {
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    }
    
}


document.querySelector('.btn-hold').addEventListener('click', switchPlayer);

document.querySelector('.btn-new').addEventListener('click', newGame);

newGame();



















