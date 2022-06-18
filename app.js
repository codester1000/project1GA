const X = []
const O = []
let currPlay = 0;
const winningConditions = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
];
let gameActive = true;
let displayTurn = document.querySelector('.message')
// function to add numbers of the squares clicked to arrays for Xs and Os
const addTurn = (clickedSquare) => {
    let cell = clickedSquare.dataset.cellIndex
    currPlay++
    if (currPlay % 2 !== 0) {
        X.push(cell)
        clickedSquare.innerText = 'X'
        displayTurn.innerText("It is X's turn")

    } else {
        O.push(cell)
        clickedSquare.innerText = 'O'
        displayTurn.innerText("It is O's turn")
    }
}

const checkWinner = () => {
    for(let i=0; i < winningConditions.length; i++) {
        if (X.includes(winningConditions[i][0]) && X.includes(winningConditions[i][1]) && X.includes(winningConditions[i][2])){
            console.log('WINNER WINNER CHICKEN DINNER')
            // displayTurn.innerText('X IS THE WINNER')
            gameActive = false;
            
        }
        if (O.includes(winningConditions[i][0]) && O.includes(winningConditions[i][1]) && O.includes(winningConditions[i][2])){
            console.log('WINNER WINNER CHICKEN DINNER')
            // displayTurn.innerText('O IS THE WINNER')
            gameActive = false;
            
        }
    }
}


// Creating an event listener for the tic tac toe box
// I kind think this should be at the end because there should be some functions in between that can be used when somethings clicked
const squares = document.querySelector('.game-container')
squares.addEventListener('click', (event) => {
    let clickedSquare = event.target
    if (event.currentTarget !== clickedSquare && gameActive === true && clickedSquare.innerText === '') {
        addTurn(clickedSquare)
        checkWinner()
    }
})
