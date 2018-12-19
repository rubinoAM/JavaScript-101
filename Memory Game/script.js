$(document).ready(()=>{ //Ayo get Sweetalert on here!!
    $('button').click(function(){
        let numGuesses = 0;
        let numMatches = 0;
        let gridSize = $(this).attr('diff');
        let cards = [];
        for(let i=1;i<=gridSize/2;i++){ //Our monsters start at 1 in their filenames
            let cardNumber = i;
            cards.push(`<img src="./cards/card${cardNumber}.jpg" />`); //Push two of each since it's a matching game
            cards.push(`<img src="./cards/card${cardNumber}.jpg" />`);
        }
        cards = shuffleDeck(cards);

        let memoryHTML = `<div class='board-${gridSize}'>`;
        cards.forEach((card)=>{
            memoryHTML += `
                <div class="playcard-${gridSize}">
                    <div class="playcard-holder">
                        <div class="playcard-front">${card}</div>
                        <div class="playcard-back"></div>
                    </div>
                </div>
            `
        })
        memoryHTML += `</div>`;
        $('.mg').html(memoryHTML);
        $('.playcard-holder').click(function(){
            $(this).addClass('flip');
            let cardsUp = $('.flip');
            numGuesses += 1;
            if (cardsUp.length === 2){
                const card1 = cardsUp[0];
                const card2 = cardsUp[1];

                if (card1.innerHTML == card2.innerHTML){
                    cardsUp.removeClass('flip');
                    cardsUp.addClass('match');
                    numMatches += 1;
                } else {
                    setTimeout(()=>{
                        cardsUp.removeClass('flip'); //The user needs to see the card before we flip it back. Use setTimeout()
                    },1000);
                }
            }
            checkWin(numGuesses,numMatches,gridSize);
        });
    })
})

function shuffleDeck(d){
    for(let i = 0; i < 100000; i++){
        let rand1 = Math.floor(Math.random()*d.length);
        let rand2 = Math.floor(Math.random()*d.length);
        let safeCard = d[rand1];
        d[rand1] = d[rand2];
        d[rand2] = safeCard;
    }
    return d;
}

function checkWin(guesses,matches,size){
    if (size == 4){
        if (guesses > 8){
            swal("Failure", "Sorry. You Lost!", "error");
            $('.playcard-holder').unbind('click');
        }
        else if (matches == 2){
            swal("Victory", "Congratulations. You Won!", "success");
            $('.playcard-holder').unbind('click');
        }
    }
    else if (size == 12){
        if (guesses > 24){
            swal("Failure", "Sorry. You Lost!", "error");
            $('.playcard-holder').unbind('click');
        }
        else if (matches == 6){
            swal("Victory", "Congratulations. You Won!", "success");
            $('.playcard-holder').unbind('click');
        }
    }
    else if (size == 28){
        if (guesses > 56){
            swal("Failure", "Sorry. You Lost!", "error");
            $('.playcard-holder').unbind('click');
        }
        else if (matches == 14){
            swal("Victory", "Congratulations. You Won!", "success");
            $('.playcard-holder').unbind('click');
        }
    }
}