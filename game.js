const score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

function playGame (playerMove) {
    
    const compMove = pickCompMove();
    let result = '';
    if (playerMove === 'Scissors') {
        if (compMove === 'Rock') {
            result = 'You lose!!';
        }   else if (compMove === 'Paper') {
            result = 'You win!!';
        }   else if (compMove === 'Scissors') {
            result = 'Tie';
        } 

    } else if (playerMove === 'Paper') {
        if (compMove === 'Rock') {
            result = 'You win!!';
        }   else if (compMove === 'Paper') {
            result = 'Tie';
        }   else if (compMove === 'Scissors') {
            result = 'You lose!!';
        }

    } else if (playerMove === 'Rock') {
        if (compMove === 'Rock') {
            result = 'Tie';
        }   else if (compMove === 'Paper') {
            result = 'You lose!!';
        }   else if (compMove === 'Scissors') {
            result = 'You win!!';
        }
    }

    if (result === 'You win!!') {
        score.Wins += 1;
    } else if (result === 'You lose!!') {
        score.Losses += 1;
    } else if (result === 'Tie') {
        score.Ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    alert(`You picked ${playerMove}. Computer picked ${compMove}. ${result} 
                Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`);
}

function pickCompMove () {
    const randomNumber = Math.random();
    
    let compMove = '';
            if (randomNumber >= 0 && randomNumber < 1/3) {
                compMove = 'Rock';
            }   else if (randomNumber >= 1/3 && randomNumber < 2/3) {
                compMove = 'Paper';
            }   else if (randomNumber >= 2/3 && randomNumber < 1) {
                compMove = 'Scissors';
            }
            
    return compMove;
}

