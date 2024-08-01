// userInput is initialized as 0; The user will only enter 3 or 6; if the user inputs a number that is not 3 or 6 we need to handle that
var chosenNumOfHoles = 0;
// Storing the hole count here
var hole = 0;
//  user score will increase with each user input; if the user inputs 1; 2; 3; for respective putts hit per hole then user socre will equal 6
var userScoreTotal = 0;
// User will input their name updating this 
var userName = "";
// Establising the course par for a userInput of 3
var scoreArray = []
let coursePar1 = 9;
// Establising the course par for a userInput of 3
let coursePar2 = 18;

var threeHoleFinalScore = 0

var sixHoleFinalScore = 0

// promting user for their name
userName = prompt(`Welcome! Let's play some golf! What's your name?`);
// promting user for their perfered numerer of holes
chosenNumOfHoles = prompt(`Hello, ${userName}! How many holes of golf would you like to play? (3 or 6)`);

// while the number of holes is less than the choosen number of holes
while (hole < chosenNumOfHoles) {
    // incrementing hole counter by 1
    ++hole;
    var incrementingScore = prompt(`How many putts for hole ${hole}? (Par 3)`);
    scoreArray.push(parseInt(incrementingScore));
}

if (hole === 3) {
    userScoreTotal = scoreArray[0] + scoreArray[1] +scoreArray[2];
    console.log(`Raw points total for 3 holes: ${userScoreTotal}`);
    threeHoleFinalScore =  userScoreTotal - coursePar1;
    console.log(`Good game, ${userName}! Your total par was: ${threeHoleFinalScore}`);
} 

if (hole === 6) {
    userScoreTotal = scoreArray[0] + scoreArray[1] +scoreArray[2] + scoreArray[3] + scoreArray[4] +scoreArray[5];
    console.log(`Raw points total for 6 holes: ${userScoreTotal}`);
    sixHoleFinalScore = userScoreTotal - coursePar2;
    console.log(sixHoleFinalScore);
    console.log(`Good game, ${userName}! Your total par was: ${sixHoleFinalScore}`);
}


/*
if (threeHoleFinalScore > 0) {
    console.log(`Better luck next time, ugh! Your total par was: +${threeHoleFinalScore}`)
} else if (threeHoleFinalScore < 0) {
    console.log(`Wow! You did really well! Your total par was: ${threeHoleFinalScore}`)
} else {
    console.log(`Yeah, ${userName}! Not bad! You got a solid score! Your total par was: ${threeHoleFinalScore}`)
}

if (sixHoleFinalScore > 0) {
    console.log(`Better luck next time, ugh! Your total par was: +${sixHoleFinalScore}`)
} else if (threeHoleFinalScore < 0) {
    console.log(`Wow! You did really well! Your total par was: ${sixHoleFinalScore}`)
} else {
    console.log(`Yeah, ${userName}! Not bad! You got a solid score! Your total par was: ${sixHoleFinalScore}`)
}
*/