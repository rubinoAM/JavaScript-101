// Define players array
var players = [
    {
      name: 'Paul Millsap',
      position: 'PF',
      avgMinutesPlayed: 36,
      avgPoints: 16.4,
      avgRebounds: 9.4,
      starter: true
    },
    {
      name: 'Jeff Teague',
      position: 'PG',
      avgMinutesPlayed: 28.6,
      avgPoints: 15.6,
      avgRebounds: 1.9,
      starter: true
    },
    {
      name: 'Al Horford',
      position: 'C',
      avgMinutesPlayed: 32,
      avgPoints: 13.2,
      avgRebounds: 6.8,
      starter: true
    },
    {
      name: 'Kent Bazemore',
      position: 'SF',
      avgMinutesPlayed: 31.8,
      avgPoints: 12,
      avgRebounds: 6.6,
      starter: true
    },
    {
      name: 'Kyle Korver',
      position: 'SG',
      avgMinutesPlayed: 32.4,
      avgPoints: 11.2,
      avgRebounds: 4.9,
      starter: true
    },
    {
      name: 'Dennis Schroder',
      position: 'PG',
      avgMinutesPlayed: 18.3,
      avgPoints: 10.7,
      avgRebounds: 1.8,
      starter: false
    },
    {
      name: 'Kris Humphries',
      position: 'PF',
      avgMinutesPlayed: 14.7,
      avgPoints: 9.7,
      avgRebounds: 5.7,
      starter: false
    },
    {
      name: 'Mike Scott',
      position: 'PF',
      avgMinutesPlayed: 17.6,
      avgPoints: 7.0,
      avgRebounds: 3.6,
      starter: false
    },
    {
      name: 'Thabo Sefolosha',
      position: 'SF',
      avgMinutesPlayed: 18.9,
      avgPoints: 4.8,
      avgRebounds: 3.9,
      starter: false
    },
    {
      name: 'Mike Muscala',
      position: 'PF',
      avgMinutesPlayed: 7.4,
      avgPoints: 2.7,
      avgRebounds: 1.9,
      starter: false
    },
    {
      name: 'Tim Hardaway Jr.',
      position: 'SG',
      avgMinutesPlayed: 9.7,
      avgPoints: 2.2,
      avgRebounds: 1.0,
      starter: false
    },
    {
      name: 'Lamar Patterson',
      position: 'SG',
      avgMinutesPlayed: 5.0,
      avgPoints: 1.5,
      avgRebounds: 1.3,
      starter: false
    },
    {
      name: 'Kirk Hinrich',
      position: 'SG',
      avgMinutesPlayed: 4.5,
      avgPoints: 0.8,
      avgRebounds: 0.7,
      starter: false
    }
  ];

// Print the average playing time of the players
function calcAvgTimePlayers(){
    var avgOfAvgMinutes = 0;
    for(i=0; i<players.length; i++){
    avgOfAvgMinutes += players[i].avgMinutesPlayed;
    }
    return((avgOfAvgMinutes/players.length).toFixed(1));
}

// Print the average playing time of the starters
function calcAvgTimeStarters(){
    var avgOfAvgMinutes = 0;
    var numStarters = 0;
    for(i=0; i<players.length; i++){
        if (players[i]['starter']){
            avgOfAvgMinutes += players[i].avgMinutesPlayed;
            numStarters += 1;
        }
    }
    return((avgOfAvgMinutes/numStarters).toFixed(1));
}

// Print the average playing time of the bench players
function calcAvgTimeBenchPlayers(){
    var avgOfAvgMinutes = 0;
    var numBench = 0;
    for(i=0; i<players.length; i++){
        if (players[i]['starter'] == false){
            avgOfAvgMinutes += players[i].avgMinutesPlayed;
            numBench += 1;
        }
    }
    return((avgOfAvgMinutes/numBench).toFixed(1));
}

// Create an array of the names of each player
function arrayPlayerNames(){
    var playerArray = [];
    for(i=0; i<players.length; i++){
        playerArray.push(players[i]['name']);
    }
    return(playerArray);
}

// Create an array of the names of the players who average more than 10 points per game
function moreThanTenPointsPerGame(){
    var playerArray = [];
    for(i=0; i<players.length; i++){
        if(players[i]['avgPoints'] > 10){
            playerArray.push(players[i]['name']);
        }
    }
    return(playerArray);
}

// Create an array of the names of the players who average more than 5 rebounds per game
function moreThanFiveReboundsPerGame(){
    var playerArray = [];
    for(i=0; i<players.length; i++){
        if(players[i]['avgRebounds'] > 5){
            playerArray.push(players[i]['name']);
        }
    }
    return(playerArray);
}

// Determine which player has the most points played per minute
function mostPointsPerMinute(){
    var playerMostPointsPerMinute = "";
    for(i=0; i<players.length-1; i++){
        if (players[i+1]["avgPoints"]/players[i+1]["avgMinutesPlayed"] > players[i]["avgPoints"]/players[i]["avgMinutesPlayed"]){
            playerMostPointsPerMinute = players[i+1]["name"];
        }
    }
    return(playerMostPointsPerMinute);
}

// Determine the average points score for the team as a whole
function avgTeamScore(){
    var totalTeamScore = 0;
    for(i=0; i<players.length; i++){
        totalTeamScore += players[i]["avgPoints"];
    }
    return((totalTeamScore/players.length).toFixed(1));
}

// Assign function results to variables
avgTimPlay = calcAvgTimePlayers();
avgTimStrt = calcAvgTimeStarters();
avgTimBnch = calcAvgTimeBenchPlayers();
arrPlaName = arrayPlayerNames();
moreTenPt = moreThanTenPointsPerGame();
moreFiveRbd = moreThanFiveReboundsPerGame();
mostPtPerMin = mostPointsPerMinute();
avgTeamScore = avgTeamScore();

// Render to DOM

// Create variable for main container
var mainContainer = document.getElementById("m-c");

// Create time container and contents
var timeContainer = document.getElementById('ti-c');
timeContainer.innerHTML = `
    <div class="question">
        <h1>Question 1: What is the average play time of all of the players?</h1>
        <h3>Answer: ` + avgTimPlay + ` Minutes</h3>
    </div>
    <div class="question">
        <h1>Question 2: What is the average play time of all of the starters?</h1>
        <h3>Answer: ` + avgTimStrt + ` Minutes</h3>
    </div>
    <div class="question">
        <h1>Question 3: What is the average play time of all of the bench players?</h1>
        <h3>Answer: ` + avgTimBnch + ` Minutes</h3>
    </div>
`;

// Create player container and contents
var playerContainer = document.getElementById("p-c");
playerContainer.innerHTML = `
    <div class="question" id="q-4">
        <h1>Question 4: Create an array listing out every player</h1>`;

var questionFour = document.getElementById("q-4");
for(i=0; i<arrPlaName.length; i++){
    counter = i + 1;
    questionFour.innerHTML += `<h4>` + counter + ". " + arrPlaName[i];}

playerContainer.innerHTML +=`
    </div>
    <div class="question" id="q-5">
        <h1>Question 5: Which players average more than 10 points per game?</h1>
        <h3>Answer:</h3>`;

var questionFive = document.getElementById('q-5');
for(i=0; i<moreTenPt.length; i++){
    counter = i + 1;
    questionFive.innerHTML += `<h4>` + counter + '. ' + moreTenPt[i] + `</h4>`;}

playerContainer.innerHTML +=`    
    </div>
    <div class="question" id="q-6">
        <h1>Question 6: Which players average more than 5 rebounds per game?
        <h3>Answer:</h3>`;

var questionSix = document.getElementById('q-6');
for(i=0; i<moreFiveRbd.length; i++){
    counter = i + 1;
    questionSix.innerHTML += `<h4>` + counter + '. ' + moreFiveRbd[i] + `</h4>`;}

playerContainer.innerHTML +=`
    </div>
    <div class="question" id="q-7">
        <h1>Question 7: Which player scores the most points per minute?
        <h3>Answer: ` + mostPtPerMin + `</h3>
    </div>`;

// Create team container and contents
var teamContainer = document.getElementById("te-c");
teamContainer.innerHTML = `
    <div class="question">
        <h1>Question 8: What is the average score for the entire team?</h1>
        <h3>Answer: ` + avgTeamScore + ` Points</h3>
    </div>
`;

// Append containers to document
mainContainer.appendChild(timeContainer);
mainContainer.appendChild(playerContainer);
mainContainer.appendChild(teamContainer);