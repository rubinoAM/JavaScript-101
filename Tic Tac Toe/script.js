//console.log("Dave's not here, man.");

/*
    1. Set Up Board
    2. User should be able to click on a button
        -When the click happens, the square should have that player's mark
    3. If it's X's turn, otherwise put a O in
    4. In order to accomplish 3, we need to keep trak of who's turn it is
        -After X goes, it becomes O's turn, and vice versa
    5. Keep other player from taking a square
    6. See if someone won! If so, congratulate the
    7. Stop the game if someone won, otherwise let it keep going
*/
let oneHumanGame = false;
let twoHumanGame = false;

let whosTurn = 1;
let player1Squares = []; //Make an empty array for both players
let player2Squares = []; //Push each new square into the appropriate array
const winningCombos = [
    ["A1","B1","C1"],
    ["A1","A2","A3"],
    ["A1","B2","C3"],
    ["B1","B2","B3"],
    ["C1","C2","C3"],
    ["A2","B2","C2"],
    ["A3","B3","C3"],
    ["A3","B2","C1"],
];
let player1Victories = 0;
let player2Victories = 0;
let singlePlayerContinue = true;

const squares = document.getElementsByClassName('square');
console.log(squares);

function resetGame(){
    for (let i = 0;i<squares.length; i++){
        if(squares[i].innerHTML == "X" || squares[i].innerHTML == "O"){
            squares[i].innerHTML = "-";
        }
        if(squares[i].classList.contains('winning-square')){
            squares[i].classList.remove('winning-square');
        }
        squares[i].disabled = false;
    }
    player1Squares = [];
    player2Squares = [];
    whosTurn = 1;

    if(oneHumanGame == true){
        document.querySelector('#message').innerHTML = "It's Your Turn!";
        singlePlayerContinue = true;
        onePlayerGame();
    }
    if(twoHumanGame == true){
        document.querySelector('#message').innerHTML = "It's Player One's Turn!";
        twoPlayerGame();
    }
}

function noDisplay(element){
    element.style.display = "none";
}

function clearOverlay(event){
    let overlay = document.querySelector('#overlay');
    let options = document.querySelector('#option-container');

    noDisplay(options);
    overlay.classList.add('fade-out');

    window.setTimeout(function(){
        noDisplay(overlay)
    },1000);
}

function onePlayerGame(event){
    oneHumanGame = true;
    document.querySelector('#message').innerHTML = "It's Your Turn!";
    for (let i = 0;i<squares.length; i++){
        //Each individual square is squares[i]
        //We can an event listener to each one
        squares[i].addEventListener('click',function(event){ //Anonymous function
            console.dir(this);
            if(this.innerHTML === '-'){
                if(whosTurn === 1){     //Player 1
                    this.innerHTML = "X";
                    player1Squares.push(this.id);
                    checkWin(player1Squares,1);
                    if(singlePlayerContinue == true){
                        computerTurn();}
                }
            }
        });
    }

    function randomIndex(min, max){
        return (Math.floor(Math.random() * (max-min)) + min)-1;}
    
    function computerTurn(){
        whosTurn = 2;
        let possibleRows = ['A','B','C'];
        let possibleCols = ['1','2','3'];
        document.querySelector("#message").innerHTML = "It's The Computer's Turn!";
    
        window.setTimeout(function(){
            let spacesAdded = 0;
            if(spacesAdded === 0){
                for (let i = 0;i<squares.length; i++){
                    compChoice = possibleRows[randomIndex(1,4)] + possibleCols[randomIndex(1,4)];console.log(compChoice);
                    if(squares[i].innerHTML === "-"){
                        if(squares[i].id == compChoice){
                            squares[i].innerHTML = "O";
                            player2Squares.push(squares[i].id);
                            spacesAdded++; console.log(compChoice + " " + spacesAdded);
                        }
                    }
                }
                spacesAdded = 0;
            }
            checkWin(player2Squares,2);
            console.log(spacesAdded);
            document.querySelector('#message').innerHTML = "It's Your Turn!";
        },1500);

        whosTurn = 1;
    }

    function checkWin(playerSquares, whoMarked){
        console.log("Checking for a winner...");
    
        //OUTER LOOP
        for(let i = 0;i<winningCombos.length;i++){
            let squareCount = 0;
            //INNER LOOP
            for(let j = 0;j<winningCombos[i].length;j++){
                const winningSquare = winningCombos[i][j]
                if(playerSquares.includes(winningSquare)){
                    squareCount++;
                }
            }
    
            if(squareCount == 3){
                console.log("Player " + whoMarked + " Won!");
                console.log(winningCombos[i]);
                singlePlayerContinue = false;
                endGame(winningCombos[i], whoMarked);
            }
        }
    }

    function endGame(winningCombo, whoWon){
        if(whoWon == 1){
            player1Victories += 1;
            console.log(player1Victories);
            document.querySelector('#message').innerHTML = "You Beat The Computer!";
        }
        if(whoWon == 2){
            player2Victories += 1;
            console.log(player2Victories);
            document.querySelector('#message').innerHTML = "You Lost. Sorry!";
        }
        for (let i = 0; i < winningCombo.length; i++){
            const winningSquare = winningCombo[i];
            const squareElem = document.getElementById(winningSquare);
            console.log(squareElem);
            squareElem.className += ' winning-square';
            for (let j = 0; j < squares.length; j++){
                squares[j].disabled = true;
            }
        }
    }
}

function twoPlayerGame(event){
    twoHumanGame = true;
    document.querySelector('#message').innerHTML = "It's Player One's Turn!";
    for (let i = 0;i<squares.length; i++){
        //Each individual square is squares[i]
        //We can an event listener to each one
        squares[i].addEventListener('click',function(event){ //Anonymous function
            console.dir(this);
            if(this.innerHTML === "-"){
                if(whosTurn === 1){     //Player 1
                    this.innerHTML = "X";
                    player1Squares.push(this.id);
                    whosTurn = 2;
                    document.getElementById('message').innerHTML = "It's Player Two's Turn!";
                    checkWin(player1Squares,1);}
                else{                   //Player 2
                    this.innerHTML = "O";
                    player2Squares.push(this.id);
                    whosTurn = 1;
                    document.getElementById('message').innerHTML = "It's Player One's Turn!";
                    checkWin(player2Squares,2);}
            }
        }); //whatToListenTo.addEventListener(event,function)
    }
    
    function checkWin(playerSquares, whoMarked){
        console.log("Checking for a winner...");
        //console.log(playerSquares);
        //console.log(whoMarked);
    
        //OUTER LOOP
        for(let i = 0;i<winningCombos.length;i++){
            let squareCount = 0;
            //INNER LOOP
            //winningCombos[i] = The Winning Combo we're parsing
            for(let j = 0;j<winningCombos[i].length;j++){
                //winningCombos[i][j] = The Square in the combo we're parsing
                const winningSquare = winningCombos[i][j]
                if(playerSquares.includes(winningSquare)){
                    //They got the square!
                    squareCount++;
                }
            }
    
            if(squareCount == 3){
                console.log("Player " + whoMarked + " Won!");
                console.log(winningCombos[i]);
                endGame(winningCombos[i], whoMarked);
            }
        }
    }
    
    function endGame(winningCombo, whoWon){
        document.querySelector('#message').innerHTML = `Congratulations to Player ${whoWon}!`;
        if(whoWon == 1){
            player1Victories += 1;
            console.log(player1Victories);}
        else if(whoWon == 2){
            player2Victories += 1;
            console.log(player2Victories);}
        for (let i = 0; i < winningCombo.length; i++){
            const winningSquare = winningCombo[i];
            const squareElem = document.getElementById(winningSquare);
            console.log(squareElem);
            squareElem.className += ' winning-square';
            for (let j = 0; j < squares.length; j++){
                squares[j].disabled = true;
            }
        }
    }
}