const freshDeck = createDeck();
let theDeck = freshDeck.slice();
let playerHand = [];
let dealerHand = [];

//Deal Function
$('.deal-btn').click(()=>{
    //Shuffle
    shuffleDeck(theDeck);

    //Dealing Out Cards
    for(let c = 0; c <= 6; c++){
        let topCard = theDeck.shift() //.shift() pulls out the first element in the array and returns it
        playerHand.push(topCard);
        placeCard('player',(c+1),playerHand[c]);
        topCard = theDeck.shift();
        dealerHand.push(topCard);
        placeCard('dealer',(c+1),dealerHand[c]);
    }
})

function placeCard(who,where,what){
    //WHO: Player or Dealer
    //WHERE: Slots (1 thru 6) in Hand
    //WHAT: Card

    const classSelector = `.${who}-cards .card-${where}`;
    $(classSelector).html(`<img src="cards/${what}.png" />`);
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
    for(let i = 0; i < 1000; i++){
        let rand1 = Math.floor(Math.random()*52);
        let rand2 = Math.floor(Math.random()*52);

        //Switch deck[rand1] with deck[rand2]
        //WE NEED TO SAVE THE VALUE OF ONE OF THEM TO KEEP FOR LATER
        let safeCard = deck[rand1];
        deck[rand1] = deck[rand2];
        deck[rand2] = safeCard;
    }
}