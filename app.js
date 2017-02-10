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



// //Question 6: Guessing game
// Here we are creating the basis for our guessing game. The game will have the
// following features:
// 1. Must have a set amount of tries.   2. Must indicate if the user's guess is too high or too low.

// establishes the amount of tries that the user has
var tries = 4;
// keeps track of the number of guesses
var guesses = 0;
//favorite number ( answer). *UPDATE* added a random number feature and logs to console.
var jobAmount = Math.floor(Math.random() * 10 + 1 );
console.log('This is the randomized number: ' + jobAmount);

//creates a for loop that takes a user's guess and checks if it matches the favorite number.
for (var i = 0; i < tries; i++) {
//prompts user for a guess.
  console.log('------ NEW ITERATION ------ ');
  console.log('This is the current number of tries: ' + tries + '...');
  console.log('tries should always be 4 here.');
  var numberGuess = prompt('How many jobs have I had?');
// adds a number to guesses
  console.log('This is the current number of guesses before the loop adds to guesses: ' + guesses);
  guesses += 1;
  console.log('This is the current number of guesses after the loops adds to guesses' + guesses);
// parses the user's guess into a number data type and stores it into itself.
  console.log('This is the user\'s guess before trying to parsint it to a number: ' + numberGuess);
  numberGuess = parseInt(numberGuess, 10);
  console.log('This is the user\'s guess after trying to parsint it to a number: ' + numberGuess);
//first If statement. Checks to see if the number matches the correct number
  if (numberGuess === jobAmount) {
    //if the number is guessed in 1 attempet, or more, puts out a unique non plural or plural string.
    if(guesses === 1){
      alert('Corret! You got it right in: ' + guesses + ' guess!');
      console.log('User guessed correctly and in no more than 1 guess');
      break;
    } else {
      alert('Corret! You got it right in: ' + guesses + ' guesses!');
      console.log('User guess correctly but in at least 2 or more guesses');
      break;}
  //first elseif checks if the number is a valid number by checking if it is actually a number, or is higher or lower that the range avaliable.
  } else if (isNaN(numberGuess) || numberGuess > 10 || numberGuess < 1 ) {
  // since this isn't a legitimate guess, we subtract 1 from guesses and log both before and after;
    console.log('This is the variable "guesses" before the vaild number check: ' + guesses);
    guesses -= 1;
    console.log('This is the variable "guesses" after the valid number check: ' + guesses);
  // since this isn't a legitime guess, we subtract 1 from the iteration so that it doesn't count as a try, and log both before and after.
    console.log('This is the variable "i" before the valid number check: ' + i);
    i--;
    console.log('This is the variable "i" after the valid number check: ' + i);
  // alerts the user to enter a legitimate answer.
    alert('Please enter a valid number between 1-10!');
    console.log('The user has entered either NaN, or a number out of range');
  //checks if the user is out of tries and tells them what the correct answer is.
  } else if (guesses === tries) {
    alert('Sorry! You are out of guesses! The correct answer was: ' + jobAmount + '!');
    console.log('User ran out of tries');
  //gives the user a hint by checking if the number is too low/
  } else if(numberGuess < jobAmount) {
    alert('Sorry! ' + numberGuess + ' is too low!');
    console.log('User guessed too low');
  //gives the user a hint by checking if the number is too high.
  } else if (numberGuess > jobAmount){
    alert('Sorry! ' + numberGuess + ' is too high!');
  //catchall to help with all random cases.
  } else{
    alert('I don\'t understand your answer! Please try again! ');
  }
}

//Question 7: Here we are required to have another guessing questions. This question has 3 requirements.
//1. Answer's must be stored in an array. 2. The user only has 6 tries. 3. The user gets a message if they guess correct of if they run out of tries.
var avaliableTries = 6;
var oldCars = ['ford','chevy','toyota'];
var userWinsFlag = false;
var numberOfGuesses = 0;
//This loop will keep track of how many attempts the user has and if it's less than avaliableTries, run the quiz loop again.
for (var attempts = 0; attempts < avaliableTries; attempts++) {
  console.log('-----ATTEMPT LOOP ITTERATION---- : ');
  console.log('Attempts: ' + attempts);
//takes the user's guess and transfroms it to lowercase.
  var userGuess = prompt('Can you guess what kind of cars I have driven?');
  userGuess = userGuess.toLowerCase();
  console.log('This is the user\'s guess: ' + userGuess);
//adds 1 to the number of user guesses.
  numberOfGuesses += 1;
//This for loops checks the user's guess to all of all the values stored in oldCars and if it finds a match, returns flips userWinsFlag to true. This will allow the user to see a correct message and break the quiz loop in case there are still more iterations left.
  for (var i = 0; i < oldCars.length; i++) {
    if (userGuess === oldCars[i]){
      userWinsFlag = true;
      break;
    }
  }
//If the userWinsFlag is true, alerts that it's correct and ends the whole loop.
  if(userWinsFlag){
    alert('Congratulations! That\'s correct!');
    break;
//If the userWinsFlag is still false, then this checks to see if the user ran out of tries.
  } else if(numberOfGuesses === avaliableTries){
    alert('Nope! Sorry, you are out of guesses! The correct answers are: ' + oldCars + '!');
  }
// This lets the user know they are incorrect and the loop continues again, giving the user another chance.
  else{
    alert('Nope! Please try again!');
  }
}
