// userInput is initialized as 0; The user will only enter 3 or 6; if the user inputs a number that is not 3 or 6 we need to handle that
var chosenNumOfHoles = 0;
// Storing the hole count here
var hole = 0;
//  user score will increase with each user input; if the user inputs 1; 2; 3; for respective putts hit per hole then user socre will equal 6
var rawTotalScore = 0;
// User will input their name updating this 
var userName = "";
// Establising the course par for a userInput of 3
var scoreArray = []
let coursePar1 = 9;
// Establising the course par for a userInput of 3
let coursePar2 = 18;
var finalScore = 0;

// promting user for their name
userName = prompt(`Welcome! Let's play some golf! What's your name?`);
// promting user for their perfered numerer of holes
chosenNumOfHoles = prompt(`Hello, ${userName}! How many holes of golf would you like to play? (3 or 6)`);


// while the number of holes is less than the choosen number of holes...
while (hole < chosenNumOfHoles) {
    // incrementing hole counter by 1
    ++hole;
    // initializing a property "incrementingScore" to store the promt I want to run the same amount of times as the chosenNumOfHoles input
    var incrementingScore = prompt(`How many putts for hole ${hole}? (Par 3)`);
    // appending the incrementingScore into the scoreArray while conveting the string into an integer
    scoreArray.push(parseInt(incrementingScore));
}

// looping over scoreArray to extract its elements, adding those into the rawTotalScore property
scoreArray.forEach(element => {
    rawTotalScore += element
});

// if "hole" is equal to 3 and the rawTotalScore is equal to the course par for 3 holes (9)...
if (hole === 3 && rawTotalScore === coursePar1) {
    // then I update "finalScore" with the calculation here
    finalScore = rawTotalScore - coursePar1; /* 9 - 9 = 0 */
    console.log(`Good game, ${userName}! Your total par was: ${finalScore}.`);
    //  if "hole" is equal to 3 and the rawTotalScore is greater than the course par...
} else if (hole === 3 && rawTotalScore > coursePar1) {
    finalScore = rawTotalScore - coursePar1; /* 10 - 9 = 1*/
    console.log(`Nice try, ${userName}... Your total par was: +${finalScore}.`);
    //  if if "hole" is equal to 3 and the rawTotalScore is less than the course par...
} else if (hole === 3 && rawTotalScore < coursePar1) {
    console.log(`Raw points total for 3 holes: ${rawTotalScore}`);
    finalScore = rawTotalScore - coursePar1; /* 8 - 9 = -1*/
    console.log(`Great job, ${userName}! Your total par was: ${finalScore}!`);
} else if (hole === 6 && rawTotalScore === coursePar2) {
    finalScore = rawTotalScore - coursePar2;
    console.log(`Good game, ${userName}! Your total par was: ${finalScore}.`);
} else if (hole === 6 && rawTotalScore > coursePar2) {
    finalScore = rawTotalScore - coursePar2;
    console.log(`Nice try, ${userName}... Your total par was: +${finalScore}.`);
} else if (hole === 6 && rawTotalScore < coursePar2) {
    finalScore = rawTotalScore - coursePar2;
    console.log(`Great job, ${userName}! Your total par was: ${finalScore}!`);
}
