// creates function play
function play() {
 // defines variables to be used
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    
    var sum = die1+die2;
 // prints what is in qutoations plus the value of variable
    document.getElementById("die1").innerHTML = "Die 1 = " + die1;
 // prints what is in qutoations plus the value of variable
    document.getElementById("die2").innerHTML = "Die 2 = " + die2;
 // prints what is in qutoations plus the value of variable
    document.getElementById("sum").innerHTML = "Sum = " + sum;
// if sum is equal to 7 or 11
    if (sum == 7 || sum == 11) {
// prints what is in quotations
    document.getElementById("winLose").innerHTML = "You Win!";
    }
// otherwise if die1 equals die2 and the remainder of die 1 equals 0
    else if (die1 == die2 && die1%2 == 0) {
// print what is in quotations
    document.getElementById("winLose").innerHTML = "DOUBLES - you win";
    }
    else if (sum ==2 || sum == 3 || sum == 12) {
        document.getElementById("winLose").innerHTML = "Craps - You Lose";
    }
}
// invokes function
    play()
// reloads webpage, which reruns code
function replay(){
    window.location.reload();
}
