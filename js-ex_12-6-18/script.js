//JAVASCRIPT EXERCISES
//Exercise 1
var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var curDate = new Date();
var curDay = curDate.getDay();

if (week[curDay] == "Sunday" || week[curDay] == "Saturday"){
    console.log("Sleep in.");
} else {
    console.log("Go to work.");
}

//Exercise 2
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var daysInMonths = {
    January:31,
    February:28,
    March:31,
    April:30,
    May:31,
    June:30,
    July:31,
    August:31,
    September:30,
    October:31,
    November:30,
    December:31
}

var curYear = curDate.getFullYear();
var curMonthIndex = curDate.getMonth();

if (curYear % 4 == 0 && curYear % 100 != 0 || curYear % 400 == 0){
    console.log("Leap year.");
    daysInMonths["February"] += 1;
} else {
    console.log("Not a leap year.");
}

var curMonth = months[curMonthIndex];

for (var m in daysInMonths){
    if (m == curMonth){
        console.log(daysInMonths[m] + " days are in this month.");
    }
}

//Exercise 3
var good = 0.2; var fair = 0.15; var bad = 0.1;

function tipCalc(total,rating,patrons){
    tip = ((total * rating)/patrons).toFixed(2);
    return tip;
}

console.log("$" + tipCalc(45.32,good,3) + " per person");
