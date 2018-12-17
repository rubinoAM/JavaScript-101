$(document).ready(()=>{
    $('button').click(function(){
        let gridSize = $(this).attr('diff');
        let cards = [];
        for(let i=1;i<=gridSize/2;i++){ //Our monsters start at 1 in their filenames
            let monsterNumber = i;
            if(i<10){
                monsterNumber = "0"+i;
            }
            cards.push(`<img src="./img/monsters-${monsterNumber}.png" />`); //Push two of each since it's a matching game
            cards.push(`<img src="./img/monsters-${monsterNumber}.png" />`);
        }
        cards = shuffleDeck(cards);
        
        let memoryHTML = "";
        cards.forEach((card)=>{
            memoryHTML += `
                <div class="playcard col-sm-3">
                    <div class="playcard-holder">
                        <div class="playcard-front">${card}</div>
                        <div class="playcard-back"></div>
                    </div>
                </div>
            `
        })
        $('.mg').html(memoryHTML);
        $('.playcard-holder').click(function(){
            $(this).addClass('flip');
            let cardsUp = $('.flip');
            if (cardsUp.length === 2){
                const card1 = cardsUp[0];
                const card2 = cardsUp[1];

                if (card1.innerHTML == card2.innerHTML){
                    cardsUp.removeClass('flip');
                    cardsUp.addClass('match');
                } else {
                    setTimeout(()=>{
                        cardsUp.removeClass('flip'); //The user needs to see the card before we flip it back. Use setTimeout()
                    },1000);
                }
            }
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