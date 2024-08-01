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

// promting user for their name
userName = prompt(`Welcome! Let's play some golf! What's your name?`);
// promting user for their perfered numerer of holes
chosenNumOfHoles = prompt(`Hello, ${userName}! How many holes of golf would you like to play? (3 or 6)`);

// while the number of holes is less than the choosen number of holes
while (hole < chosenNumOfHoles) {
    // incrementing hole counter by 1
    ++hole;
    // 
    var incrementingScore = prompt(`How many putts for hole ${hole}?`);
    scoreArray.push(incrementingScore);
}

for (element in scoreArray) {
    ++element
}

// console.log(userScoreTotal)
// 

console.log(scoreArray)
console.log(userScoreTotal);
// 6 (userScore) - 9 (coursePar) 
// console.log(`User's score is: ${userScore - coursePar1}`) 
