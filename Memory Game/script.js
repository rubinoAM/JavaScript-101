$(document).ready(()=>{
    $('button').click(function(){
        let gridSize = $(this).attr('diff');
        console.log(gridSize);
        let cards = [];
        for(let i=0;i<gridSize/2;i++){
            let monsterNumber = 1;
            if(i<10){
                monsterNumber = "0"+i;
            }
            cards.push(`<img src-="/img/monsters-${monsterNumber}.png" />`);
        }    
    })
})