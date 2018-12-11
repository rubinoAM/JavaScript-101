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

let whosTurn = 1;

const squares = document.getElementsByClassName('square');
console.log(squares);

for (let i = 0;i<squares.length; i++){
    //Each individual square is squares[i]
    //We can an event listener to each one
    squares[i].addEventListener('click',function(event){ //Anonymous function
        console.dir(this);
        if(this.innerHTML == '-'){
            if(whosTurn === 1){     //Player 1
                this.innerHTML = "X";
                whosTurn = 2;}
            else{                   //Player 2
                this.innerHTML = "O";
                whosTurn = 1;}
        }
    }); //whatToListenTo.addEventListener(event,function)
}