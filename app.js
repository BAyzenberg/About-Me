'use strict';

// Blocking out all this previous code so I can work on the new code for lab 3.

// // Grabs the user's confirm and stores it in confirmQuiz
// var confirmQuiz = confirm('Hello, would you like to take a quiz?');
//
// // Creates and empty array called questionsAndAnswers which will store the questions and answers and eventually document.write them to the page.
// var questionsAndAnswers = [];
// var score =  0;
// // Checks if confirmQuiz is true or false and then console.logs
// if (confirmQuiz){
//   console.log('Awesome, Lets get started!');
// } else {
//   console.log('Too Bad, starting anyway.');
// }
//
// // lets the user know some basic info about me and sets expectations on how to answer questions
// alert('Awesome! My name is Mike and I am currently in coding school! Please make sure to answer the following questions with "Y" or "N" when possible. Thanks!');
//
// // Starts the quiz by asking the user their first question and store their answer in quizResponseOne ( we will have multiple quizResponseX variables)
// var quizResponseOne = prompt('Does Mike own a business?');
//
// // Check quizResponseOne with edge case and logs something to the console.
// // questionsAndAnswers will push these strings to it's array.
// if(quizResponseOne.toUpperCase() === 'Y' || quizResponseOne.toUpperCase() === 'YES'){
//   console.log(' Awesome! I own a window cleaning business called Apple Windows and Gutter! ');
//   //Q&As getting pushed to the array. This will happend for each following quizResponseX if statement
//   questionsAndAnswers.push(' Question: Does Mike own a business?');
//   questionsAndAnswers.push(' Answer: Awesome! I own a window cleaning business called Apple Windows and Gutter!');
//   // added a score feature to keep track of how many the user got Correct
//   score += 1;
// } else {
//   console.log('Sorry, that\'s incorrect! If you want your windows or gutters cleaned then give us a call!');
//   //Q&As getting pushed to the array. This will happend for each following quizResponseX if statement
//   questionsAndAnswers.push(' Question: Does Mike own a business?');
//   questionsAndAnswers.push(' Answer:Sorry, that\'s incorrect! If you want your windows or gutters cleaned then give us a call!');
// }
//
// // Second question
// var quizResponseTwo = prompt('Does Mike play PC games?');
//
// // Checks quizResponseTwo with edgecase and logs something to the console.
// if (quizResponseTwo.toUpperCase() === 'Y' || quizResponseTwo.toUpperCase() === 'YES') {
//   console.log('Yeah I do. I\'ve got like 200 games on steam over the last 10 years!');
//   questionsAndAnswers.push(' Question: Does Mike play PC games?');
//   questionsAndAnswers.push(' Answer: Yeah I do. I\'ve got like 200 games on steam over the last 10 years!');
//   //score
//   score += 1;
// } else {
//   console.log('Incorrect! I have a S*** ton of games on steam yet I\'m on Blizzard games like 90% of the time.');
//   questionsAndAnswers.push(' Question: Does Mike play PC games?');
//   questionsAndAnswers.push(' Answer: Incorrect! I have a S*** ton of games on steam yet I\'m on Blizzard games like 90% of the time.');
// }
//
// // Third question
// var quizResponseThree = prompt('Does Mike have a truck?');
//
// // Checks quizResponseThree with edgecase and logs something to the console.
// if (quizResponseThree.toUpperCase() === 'Y' || quizResponseThree.toUpperCase() === 'YES') {
//   console.log('Yep! Once spring gets here my crew will use it for our business!');
//   questionsAndAnswers.push(' Question: Does Mike have a truck?');
//   questionsAndAnswers.push(' Question: Yep! Once spring gets here my crew will use it for our business!');
//   // score
//   score += 1;
// } else {
//   console.log('Wrong. I have small work truck that my and my crew use for my business.');
//   questionsAndAnswers.push(' Question: Does Mike own a business?');
//   questionsAndAnswers.push(' Answer: Wrong. I have small work truck that my and my crew use for my business.');
// }
// // Fourth question.
// var quizResponseFour = prompt('Does Mike like MMA?');
//
// // Checks quizResponseFour with edgecase and logs something to the console.
// if (quizResponseFour.toUpperCase() === 'Y' || quizResponseFour.toUpperCase() === 'YES') {
//   console.log('Yeah, but I\'m not very good. You can youTube a video of my getting my A$$ kicked in about 43 seconds hahah' );
//   questionsAndAnswers.push(' Question: Does Mike Mike like MMA?');
//   questionsAndAnswers.push(' Yeah, but I\'m not very good. You can youTube a video of my getting my A$$ kicked in about 43 seconds hahah');
//   //score
//   score += 1;
// } else {
//   console.log('Nope, I actually do like MMA! I would like to get back into it again someday!');
//   questionsAndAnswers.push(' Question: Does Mike like MMA?');
//   questionsAndAnswers.push(' Answer: Nope, I actually do like MMA! I would like to get back into it again someday!');
// }
// // Fifth question
// var quizResponseFive = prompt('Does Mike like Thai food?');
//
// // check quizResponseFive with edgecase and logs something to the console.
// if (quizResponseFive.toUpperCase() === 'Y' || quizResponseFive.toUpperCase() === 'YES') {
//   console.log('Correct. More like I like Pad Thai food with my Peanut Sacue but whatever...');
//   questionsAndAnswers.push(' Question: Does Mike like Thai food?');
//   questionsAndAnswers.push(' Answer: Correct. More like I like Pad Thai food with my Peanut Sacue but whatever...');
//   //score
//   score += 1;
// } else {
//   console.log('Wrong! I f!*$ing love Thai food!');
//   questionsAndAnswers.push(' Question: Does Mike like Thai food?');
//   questionsAndAnswers.push(' Answer: Wrong! I f!*$ing love Thai food!');
// }
// var totalScore = ' Score: ' + score + '!' ;
// document.write(questionsAndAnswers, totalScore);



//Here we are creating the basis for our guessing game. The game will have the
// following features:
//1. Must have a set amount of tries.   2. Must indicate if the user's guess is too high or too low.

// establishes the amount of tries that the user has
var tries = 4;

// keeps track of the number of guesses
var guesses = 0;

//favorite number ( answer)
var favNumber = 1;

//creates a for loop that takes a user's guess and checks if it matches the favorite number.
for (var i = 0; i < tries; i++) {
//prompts user for a guess.
  var numberGuess = prompt('Guess a number between 1 and 10');
// adds a number to guesses
  guesses = i + 1;
// parses the user's guess into a number data type and stores it into itself.
  numberGuess = parseInt(numberGuess, 10);

//first If statement. Checks to see if the number matches the correct number
  if (numberGuess === favNumber) {
    //if the number is guessed in 1 attempet, or more, puts out a unique non plural or plural string.
    if(guesses === 1){
      alert('Corret! You found the number in: ' + guesses + ' guess!');
      break;
    } else {
      alert('Corret! You found the number in: ' + guesses + ' guesses!');
      break;}
  //first elseif checks if the number is actually a number, or is higher or lower that the range avaliable.
  } else if (isNaN(numberGuess) || numberGuess > 10 || numberGuess < 1 ) {
    // since this isn't a legitimate guess, we subtract 1 from guesses;
    guesses -= 1;
    // since this isn't a legitime guess, we subtract 1 from the iteration so that it doesn't count as a try
    i--;
    // alerts the user to enter a legitimate answer.
    alert('Please enter a valid number between 1-10!');
    // gives the user a hint by checking if the number is too low.
  } else if (numberGuess < favNumber) {
    alert('Sorry! ' + numberGuess + ' is too low!');
    //gives the user a hint by checking if the number is too high.
  } else if (numberGuess > favNumber){
    alert('Sorry! ' + numberGuess + ' is too high!');
    //catchall to help with all random cases.
  } else{
    alert('I don\'t understand your answer! Please try again! ');
  }
}
