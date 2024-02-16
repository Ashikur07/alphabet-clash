function handleKeybordButtonPress(event) {
    const playerPressed = event.key;
    // console.log(playerPressed);

    // game over 
    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentElement = document.getElementById('current-alphabet');
    const expectedAlphabet = currentElement.innerText.toLocaleLowerCase();


    // check match or not 
    if (playerPressed === expectedAlphabet) {
        // console.log("you get a point");
        // update score 

        const currentScore = getTextElementById('current-score');
        const updateScore = currentScore + 1;
        setTextElementById('current-score', updateScore);

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }

    else {
        // console.log('you lost a life');
        const currentLife = getTextElementById('current-life');
        const updateLife = currentLife - 1;
        setTextElementById('current-life', updateLife);

        if (updateLife === 0) {
            gameOver();
        }

    }
}


document.addEventListener('keyup', handleKeybordButtonPress)


function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);

    // set randomly generated alphabet to the screen
    const getCurrenAlphabet = document.getElementById('current-alphabet');
    getCurrenAlphabet.innerText = alphabet;

    // set backgroundCollor
    setBackgroundColorById(alphabet);
}


function play() {
    // hide everythings show only the playgound
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset the life and score
    setTextElementById('current-life',3);
    setTextElementById('current-score',0);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    const lastScore = getTextElementById('current-score');
    setTextElementById('total-score',lastScore);

    //clear the last select alphabet highlight
    const currentAlphabetLast = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabetLast);

}

