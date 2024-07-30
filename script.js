
/*
build a JavaScript program that tallies up your round of mini golf and logs a message at the end with your total par.
Step 1: Prompt the user for input.
Step 2: Repeat actions using a loop.
Step 3: Perform calculations and make decisions based on the numbers.
Step 4: Output results to the console.

Prompt the user for their name.
Next, prompt the user if they would like to play 3 or 6 holes of mini golf.
Finally, prompt the user either 3 times or 6 times (depending on their input for the second prompt) for each "hole of golf" asking for the number of putts for that specific hole.
Keep track of their cumulative score (total number of putts) and at the end, compare that to the total course par (9 if they chose 3 holes, 18 if they chose 6 — par is 3 for every hole) to calculate the golfer’s total par for the round.
After the last hole, one of three messages is logged to the console depending on if the user was over, under or on par for the round:
If over par, the message should read "Nice try, (name)... Your total par was: +(par)." [be sure to include the plus symbol here to denote over par].
If under par, the message should read "Great job, (name)! Your total par was: -(par)." [include the minus symbol]
If even with par, the message should read "Good game, (name). Your total par was: 0."
 

*/

console.log("Hello")

var userResponse = 0
var userScore = 0
var userName = prompt("What is you name?")
var userResponse = prompt(`Welcome ${userName}! How many holes of mini golf would you like to play (3 or 6)?`)


if (userResponse == 0) {
    console.log(`they want to play ${userResponse} holes.`)
} else {
    console.log("Error")
}
