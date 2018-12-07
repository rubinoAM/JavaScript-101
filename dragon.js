//Stored Functions
function rollDie(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min + 1)) + min;}

//Create Dragon
var dragonImg = new Image(631,463);
dragonImg.src = "./dragon-assets/dragon.png";
var dragonDiv = document.createElement("div");
dragonDiv.id = "dragon";

//Create Dice
var dieOne = new Image();
dieOne.src = "./dragon-assets/d1.gif";
var dieTwo = new Image();
dieTwo.src = "./dragon-assets/d1.gif";
var diceDiv = document.createElement("div");
diceDiv.id = "dice-container";

//Create Game Prompt
var gamePrompt = document.createElement("div");
gamePrompt.id = "text-box";
promptText = document.createElement("p");
promptText.innerHTML = "Hark! The dragon doth approacheth! Thou must decide thine course of action post haste! Shall ye flee for thine own life, or shall ye attempt a stand against the dreaded beast? If thou chooses to battle the dragon, thou must roll two dice and amass a total roll of 9 or greater. Godspeed ye, brave soul!";

//Create Buttons
var fleeBtn = document.createElement("button");
fleeBtn.id = "flee-btn";
fleeBtn.innerHTML = "FLEE";

var fightBtn = document.createElement("button");
fightBtn.id = "fight-btn";
fightBtn.innerHTML = "FIGHT";

var btnDiv = document.createElement("div");
btnDiv.id = "btn-container";

//Append assets to DIV's
var gameInput = document.createElement("div");
gameInput.id = "game-input";

dragonDiv.appendChild(dragonImg);
diceDiv.appendChild(dieOne);
diceDiv.appendChild(dieTwo);
gamePrompt.appendChild(promptText);
btnDiv.appendChild(fleeBtn);
btnDiv.appendChild(fightBtn);
gameInput.appendChild(gamePrompt);
gameInput.appendChild(btnDiv);

//Append DIV's to <body>
document.body.appendChild(dragonDiv);
document.body.appendChild(diceDiv);
document.body.appendChild(gameInput);

//Check button presses
document.getElementById("flee-btn").onclick = function(){
    dragonImg.src = "https://c1.staticflickr.com/3/2463/3633230337_6e4f9c4f0a_b.jpg";
    promptText.innerHTML = "Alas! Thou hast chosen to flee! Toodle-oo, you cowardly sod!"

    document.getElementById("flee-btn").style.display = "none";
    document.getElementById("fight-btn").style.display = "none";
}

document.getElementById("fight-btn").onclick = function(){
    var rollOne, rollTwo;
    rollOne = rollDie(1,6);
    rollTwo = rollDie(1,6);
    console.log(rollOne + " " + rollTwo);
    totalRoll = rollOne + rollTwo;

    dieOne.src = "./dragon-assets/d" + rollOne + ".gif";
    dieTwo.src = "./dragon-assets/d" + rollTwo + ".gif";

    if(totalRoll >= 9){
        dragonImg.src = "http://discofreestyleplatinumseries.com/wp-content/uploads/2018/02/Disco-Freestyle-Platnium-Series-Preformance-Picture.jpg";
        promptText.innerHTML = "Somehow you managed to beat the dragon. Good job, bumblechump!";
    } else {
        dragonImg.src = "https://c1.staticflickr.com/9/8058/8212846017_d3d620a42f_b.jpg";
        promptText.innerHTML = "You are dead. Not a big surprise considering you were going up against a dragon!"
    }

    document.getElementById("flee-btn").style.display = "none";
    document.getElementById("fight-btn").style.display = "none";
<<<<<<< HEAD
}
=======
}
>>>>>>> 68ebe63a69fcbb99e2f2f4867e3c14d49426bad0
