// creates function called play
function play() {
    // assigns variables for our dice
    var die1 = 5
    var die2 = 2
    // the sum is equal to the value of die1 + die2
    var sum = die1+die2
    // prints what is in quotations and the value of die1
    document.write("Die 1 = " + die1)
    // line break (separates lines)
    document.write("<br/>")
    // prints what is in quotations and the value of die2
    document.write("Die 2 = " + die2)
    // line break (separates lines)
    document.write("<br/>")
    // prints what is in quotations and the sum of the dice
    document.write("Sum = " + sum)
    // line break (separates lines)
    document.write("<br/>")
    // if the sum is exactly equal to 7 or exactly equal to 11
    if (sum == 7 || sum == 11)
    // print what is in quotations
    { document.write("CRAPS - you lose")
    // liine break (separates lines)
    document.write("<br/>")
    }
    // otherwise if die1 exactly equals die2 AND the remainder of die1/2 is exactly equal to 0 
    else if (die1== die2 && die1%2 == 0)
    {
    // print what is in quotations
    document.write("DOUBLES - you win")
    // line break (separates lines)
    document.write("<br/>")
    }
    
    }
    // print what is in quotations 
    document.write("Simple Craps")
    // line break (separates lines)
    document.write("<br/>")
    // invokes function play()
    play()
