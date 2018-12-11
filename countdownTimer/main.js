//console.log("WHOMP WHOMP")

function updateTimer(){
    var now = new Date();
    var nowAsTimeStamp = now.getTime(); //Returns number of milliseconds since 1-1-1970
    //console.log(nowAsTimeStamp);
    var timeRemaining = (timeStamp - nowAsTimeStamp)/1000;
    //console.log(timeRemaining);

    var seconds = Math.floor((timeRemaining) % 60);
	var minutes = Math.floor((timeRemaining / 60) % 60);
	var hours = Math.floor((timeRemaining / (60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (60 * 60 * 24)) % 7);
    var weeks = Math.floor(timeRemaining / (60 * 60 * 24 * 7));
    //console.log(seconds); console.log(minutes);

    document.querySelector('.weeks').innerHTML = weeks;
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;

    /* == compares values
       === compares values AND data types
       minutes = "0"
       minutes == 0 TRUE
       minutes === 0 FALSE */ 
    if(seconds === 0){
        document.querySelector('.msg-space').innerHTML = "One minute closer to liftoff!";
        document.querySelector('.message').classList.add("shake");
    }else{
        document.querySelector('.msg-space').innerHTML = "-----------------------------------";  
        document.querySelector('.message').classList.remove("shake");
    }
}

var endDate = new Date("December 22, 2018 15:04:00");
//console.log(endDate);
var timeStamp = endDate.getTime();
//console.log(timeStamp);

setInterval(updateTimer,1000);