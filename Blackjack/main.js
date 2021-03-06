const freshDeck = createDeck();
let theDeck = freshDeck.slice();
let playerHand = [];
let dealerHand = [];

let playerDone = false;
let dealerDone = false;

let playerScore = 0;
let dealerScore = 0;

$(document).ready(function(){
    $('.hit-btn').prop('disabled',true);
    $('.stand-btn').prop('disabled',true);
    $('.reset-btn').hide();
});

//Deal Function
$('.deal-btn').click(()=>{
    //Get A Deal & Shuffle It
    theDeck= freshDeck.slice();
    shuffleDeck(theDeck);

    //Dealing Out Cards
    let topCard = theDeck.shift();
    playerHand.push(topCard);
    topCard = theDeck.shift();
    dealerHand.push(topCard);
    topCard = theDeck.shift();
    playerHand.push(topCard);
    topCard = theDeck.shift();
    dealerHand.push(topCard);

    placeCard('player',1,playerHand[0]);
    placeCard('dealer',1,dealerHand[0]);
    placeCard('player',2,playerHand[1]);
    placeCard('dealer',2,dealerHand[1]);
    calcTotal(playerHand,'player');
    calcTotal(dealerHand,'dealer');

    $('.deal-btn').hide();
    $('.hit-btn').prop('disabled',false);
    $('.stand-btn').prop('disabled',false);

    checkWin("blackjack");
    checkDraw();
})

//Hit
$('.hit-btn').click(()=>{
    const topCard = theDeck.shift();
    playerHand.push(topCard);
    placeCard('player',playerHand.length,topCard);
    calcTotal(playerHand,'player');
    checkWin();
    checkDraw();
});

//Stand
$('.stand-btn').click(()=>{
    /*Rules for Dealer
    1. If the dealer has less than 17, they must hit
    2. If the dealer has 17 or more, they can't hit
    */
   let dealerTotal = calcTotal(dealerHand,'dealer');
   while (dealerTotal < 17){
       const topCard = theDeck.shift();
       dealerHand.push(topCard);
       placeCard('dealer',dealerHand.length,topCard);
       dealerTotal = calcTotal(dealerHand,'dealer');
   }
   checkWin();
   checkDraw();
});

$('.reset-btn').click(()=>{
    //Player
    $('.player-cards').children().empty();
    $('.player-total').html("0");
    playerHand = [];

    //Dealer
    $('.dealer-cards').children().empty();
    $('.dealer-total').html("0");
    dealerHand = [];

    $('.buttons').children().show();
    $('.hit-btn').prop('disabled',true);
    $('.stand-btn').prop('disabled',true);
    $('.reset-btn').hide();
});

//Calculate Total for Player(s)
function calcTotal(hand,who){
    //Find out the total and put it in the DOM
    let handTotal = 0;
    let numAces = 0;
    hand.forEach((card,i)=>{
        let cardValue = Number(card.slice(0,-1));
        if(cardValue >= 10){
            cardValue = 10;
        } else if (cardValue == 1){
            numAces += 1;
            cardValue = 11;
        }
        handTotal += cardValue;
    });
    if(handTotal > 21){
        for(let i=0; i < numAces; i++){
            handTotal -= 10;
        }
    }
    $(`.${who}-total`).html(handTotal);
    return handTotal;
}

function placeCard(who,where,what){
    //WHO: Player or Dealer | WHERE: Slots (1 thru 6) in Hand | WHAT: Card
    const classSelector = `.${who}-cards .card-${where}`;
    if(who == 'player'){
        $(classSelector).html(`<img src="cards/${what}.png" />`);
    }
    else{
        $(classSelector).html(`<img src="cards/back.png" />`);
    }
}

function createDeck(){
    let newDeck = []; //Empty array for new deck
    const suits = ['h','c','d','s'] //All possible suits in a deck

    //Outer Loop: For each suit

    //A forEach loop takes a function as an argument
    //The function gets two args: 1) What to call this in element in loop 2) What index the loop's on
    suits.forEach((s, index)=>{
        //Inner Loop: For each card
        for(let c=1; c<= 13; c++){
            newDeck.push(`${c}${s}`);
        }
    });
    return newDeck;
}

function shuffleDeck(deck){
    //When the loop is done, the array will be shuffled
    for(let i = 0; i < 100000; i++){
        let rand1 = Math.floor(Math.random()*52);
        let rand2 = Math.floor(Math.random()*52);

        //Switch deck[rand1] with deck[rand2]
        //WE NEED TO SAVE THE VALUE OF ONE OF THEM TO KEEP FOR LATER
        let safeCard = deck[rand1];
        deck[rand1] = deck[rand2];
        deck[rand2] = safeCard;
    }
}

function checkDraw(){
    let playerTotal= calcTotal(playerHand,'player');
    let dealerTotal= calcTotal(dealerHand,'dealer');
    if(playerTotal >= 17 && dealerTotal >= 17 && playerTotal == dealerTotal){
        alert("DRAW");
        for(let i = 0; i < dealerHand.length; i++){
            flipCards('dealer',i+1,dealerHand[i]);
        }
        gameEnd();
    }
}

function checkWin(useCase){
    /*
        1. If the player has > 21, you lose
        2. If the dealer has > 21, they lose
        3. If playerHand.length == 2 & total == 21, BLACKJACK
        4. If dealerHand.length == 2 & total == 21, BLACKJACK
        5. If player > dealer, player wins
        6. If dealer > player, dealer wins
        7. Else... push (tie)
    */
    let playerTotal= calcTotal(playerHand,'player');
    let dealerTotal= calcTotal(dealerHand,'dealer');

    if(useCase == "blackjack"){
        if(playerHand.length == 2 && playerTotal == 21){
            alert("BLACKJACK! YOU WIN!!");
            for(let i = 0; i < dealerHand.length; i++){
                flipCards('dealer',i+1,dealerHand[i]);
            }
            playerScore += 1;
            gameEnd();
        }
        else if(dealerHand.length == 2 && dealerTotal == 21){
            alert("BLACKJACK! YOU LOSE!!");
            for(let i = 0; i < dealerHand.length; i++){
                flipCards('dealer',i+1,dealerHand[i]);
            }
            dealerScore += 1;
            gameEnd();
        }
        return;
    }

    if(playerTotal > 21 || dealerTotal == 21){
        alert("YOU LOSE!");
        for(let i = 0; i < dealerHand.length; i++){
            flipCards('dealer',i+1,dealerHand[i]);
        }
        dealerScore += 1;
        gameEnd();
    }
    else if(dealerTotal > 21 || playerTotal == 21){
        alert("YOU WIN!");
        for(let i = 0; i < dealerHand.length; i++){
            flipCards('dealer',i+1,dealerHand[i]);
        }
        playerScore += 1;
        gameEnd();
    }
    else if(dealerTotal >= 17 && playerHand.length >= 2 && playerHand.length <= 5){
        if(playerTotal > dealerTotal){
            alert("YOU WIN!");
            for(let i = 0; i < dealerHand.length; i++){
                flipCards('dealer',i+1,dealerHand[i]);
            }
            playerScore += 1;
            gameEnd();
        }
        else{
            alert("YOU LOSE!");
            for(let i = 0; i < dealerHand.length; i++){
                flipCards('dealer',i+1,dealerHand[i]);
            }
            dealerScore += 1;
            gameEnd();
        }
    }    
    else if(dealerTotal >= 17 && playerHand.length == 6){
        if(playerTotal > dealerTotal){
            if(playerTotal < 21){
                alert("YOU WIN!");
                for(let i = 0; i < dealerHand.length; i++){
                    flipCards('dealer',i+1,dealerHand[i]);
                }
                playerScore += 1;
                gameEnd();
            } else {
                alert("YOU LOSE!");
                for(let i = 0; i < dealerHand.length; i++){
                    flipCards('dealer',i+1,dealerHand[i]);
                }
                dealerScore += 1;
                gameEnd();
            }
        }
        else if(dealerTotal > playerTotal){
            if(dealerTotal < 21){
                alert("YOU LOSE!");
                for(let i = 0; i < dealerHand.length; i++){
                    flipCards('dealer',i+1,dealerHand[i]);
                }
                dealerScore += 1;
                gameEnd();
            } else {
                alert("YOU WIN!");
                for(let i = 0; i < dealerHand.length; i++){
                    flipCards('dealer',i+1,dealerHand[i]);
                }
                playerScore += 1;
                gameEnd();
            }
        }
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Dealer Score: ${dealerScore}`);
}

function gameEnd(){
    $('.buttons').children().hide();
    $('.reset-btn').show();
}

function flipCards(who,where,what){
    //WHO: Player or Dealer | WHERE: Slots (1 thru 6) in Hand | WHAT: Card
    const classSelector = `.${who}-cards .card-${where}`;
    $(classSelector).html(`<img src="cards/${what}.png" />`);
}