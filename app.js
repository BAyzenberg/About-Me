'use strict';

// All of our questions
var questOne = 'Does Mike own a business?';
var questTwo = 'Does Mike play PC games?';
var questThree = 'Does Mike have a truck?';
var questFour = 'Does Mike like MMA?';
var questFive = 'Does Mike like Thai food?';

// All of our answers
var answerOne = 'Y';
var answerTwo = 'Y';
var answerThree = 'Y';
var answerFour = 'Y';
var answerFive = 'Y';

// All of our correct feedback strings
var correctOne = 'Awesome! I own a window cleaning business called Apple Windows and Gutter!';
var correctTwo = 'Yeah I do. I\'ve got like 200 games on steam over the last 10 years!';
var correctThree = 'Yep! Once spring gets here my crew will use it for our business!';
var correctFour = 'Yeah, but I\'m not very good. You can youTube a video of my getting my A$$ kicked in about 43 seconds hahah';
var correctFive = 'Correct. More like I like Pad Thai food with my Peanut Sacue but whatever...';

// All of our wrong feedback strings
var wrongOne = 'Sorry, that\'s incorrect! If you want your windows or gutters cleaned then give us a call!';
var wrongTwo = 'Incorrect! I have a S*** ton of games on steam yet I\'m on Blizzard games like 90% of the time.';
var wrongThree = 'Wrong. I have small work truck that my and my crew use for my business.';
var wrongFour = 'Nope, I actually do like MMA! I would like to get back into it again someday!';
var wrongFive = 'Wrong! I f!*$ing love Thai food!';

// All of the arrays we will use to evaluate our questions and provide feed back.
var quizQuests = [questOne,questTwo,questThree,questFour,questFive];
var answerQuests = [answerOne,answerTwo,answerThree,answerFour,answerFive];
var quizCorrectFeedbacks = [correctOne,correctTwo,correctThree,correctFour,correctFive];
var quizWrongFeedbacks = [wrongOne,wrongTwo,wrongThree,wrongFour,wrongFive];

// Asks the user if the want to start quiz. Grabs the user's confirm and stores it in confirmQuiz
var confirmQuiz = confirm('Hello, would you like to take a quiz?');

// Creates a variable score to store the user's score through out the quiz.
var score =  0;

console.log('current value of confirmQuiz: ' + confirmQuiz);

// Functions for yes no questions
function quizYesNo() {
  // Starts the for loop that will iterate up to the quizQuest array length, and use that index number to reference all other ordered data in each other array.

  for (var questionNum = 0; questionNum < quizQuests.length; questionNum++) {
    console.log('------QUIZ ITERATIONS START-----');
    console.log('QuestionNum: ' + questionNum);
    console.log('Score: ' + score);

    // Prompts the user for an answer to the questions in the quizQuests array.
    var userQuizGuess = prompt(quizQuests[questionNum]);

    // Checks if the user's answer is null and forces them to input a correct response. If the user passes the check then it transforms the answer to uppercase.
    if(userQuizGuess !== null){
      userQuizGuess = userQuizGuess.toUpperCase();

      // Checks if the user entered something other than a valid response and either moves them on, or alerts them to the problem and removes and iteration in order to repeat a question.
      if (userQuizGuess !== 'Y' && userQuizGuess !== 'N'){

        alert('Please answer with a "Y" for yes, or an "N" for no!');
        console.log('QuestionNum before restarting: ' + questionNum);

        // Removes iteration to repeat questionNum
        questionNum -= 1;
        console.log('QuestionNum after restarting: ' + questionNum);

        // If the user is correct, then they get corret feedback and gain a point. If not, They get the wrong feedback and don't gain a point. ( No repeating the question.)
      } else if(userQuizGuess === answerQuests[questionNum]){

        alert(quizCorrectFeedbacks[questionNum]);
        console.log('Score before adding: ' + score);

        // Adds 1 point to score.
        score += 1;
        console.log('Score after adding: ' + score);

      } else {

        alert(quizWrongFeedbacks[questionNum]);
      }

    //This is where the null check will ask the user to input a valid answer if they try to click cancel. Also deducts an iteration to repeat the question.
    } else {

      alert('Please answer with a "Y" for yes, or an "N" for no!');
      console.log('QuestionNum for null check before: ' + questionNum);

      // Takes 1 away from the iteraion.
      questionNum -= 1;
      console.log('QuestionNum for null check after: ' + questionNum);
    }
  }
}

// Function for guessing game
function guessingGame(){
  // //Question 6: Guessing game
  // Here we are creating the basis for our guessing game. The game will have the
  // following features:
  // 1. Must have a set amount of tries.   2. Must indicate if the user's guess is too high or too low.

  // Establishes the amount of tries that the user has
  var tries = 4;

  // Keeps track of the number of guesses
  var guesses = 0;

  // Favorite number ( answer). *UPDATE* added a random number feature and logs to console.
  var jobAmount = Math.floor(Math.random() * 10 + 1 );
  console.log('This is the randomized number: ' + jobAmount);

  // Creates a for loop that takes a user's guess and checks if it matches the favorite number.
  for (var i = 0; i < tries; i++) {

    console.log('------ NEW ITERATION ------ ');
    console.log('This is the current number of tries: ' + tries + '...');
    console.log('tries should always be 4 here.');

    // Prompts user for a guess. And stores it in numberGuess.
    var numberGuess = prompt('How many jobs have I had?');

    //Log the current number of guesses.
    console.log('This is the current number of guesses before the loop adds to guesses: ' + guesses);

    // Adds a number to guesses then logs the new number.
    guesses += 1;
    console.log('This is the current number of guesses after the loops adds to guesses' + guesses);

    // Logs the user's guess.
    console.log('This is the user\'s guess before trying to parsint it to a number: ' + numberGuess);

    // Parses the user's guess into a number data type and stores it into itself, then logs the result.
    numberGuess = parseInt(numberGuess, 10);
    console.log('This is the user\'s guess after trying to parsint it to a number: ' + numberGuess);

    // First if statement. Checks to see if the number matches the correct number
    if (numberGuess === jobAmount) {

      // If the number is guessed in 1 attempet, or more, puts out a unique non plural or plural string.
      if(guesses === 1){

        alert('Corrcet! You got it right in: ' + guesses + ' guess!');
        console.log('User guessed correctly and in no more than 1 guess');

        // Adds one to the score.
        score += 1;

        // Breaks the for loop since the user got the correct answer.
        break;

      } else {

        alert('Correct! You got it right in: ' + guesses + ' guesses!');
        console.log('User guess correctly but in at least 2 or more guesses');

        // Adds one to score;
        score += 1;
        break;
      }

      //First elseif checks if the number is a valid number by checking if it is actually a number, or is higher or lower that the range avaliable.
    } else if (isNaN(numberGuess) || numberGuess > 10 || numberGuess < 1 ) {

      // Since this isn't a legitimate guess, we subtract 1 from guesses and log both before and after;
      console.log('This is the variable "guesses" before the vaild number check: ' + guesses);
      guesses -= 1;
      console.log('This is the variable "guesses" after the valid number check: ' + guesses);

      // Since this isn't a legitime guess, we subtract 1 from the iteration so that it doesn't count as a try, and log both before and after.
      console.log('This is the variable "i" before the valid number check: ' + i);
      i--;
      console.log('This is the variable "i" after the valid number check: ' + i);

      // Alerts the user to enter a legitimate answer.
      alert('Please enter a valid number between 1-10!');
      console.log('The user has entered either NaN, or a number out of range');

      // Checks if the user is out of tries and tells them what the correct answer is.
    } else if (guesses === tries) {

      alert('Sorry! You are out of guesses! The correct answer was: ' + jobAmount + '!');
      console.log('User ran out of tries');

      // Gives the user a hint by checking if the number is too low/
    } else if(numberGuess < jobAmount) {

      alert('Sorry! ' + numberGuess + ' is too low!');
      console.log('User guessed too low');

      // Gives the user a hint by checking if the number is too high.
    } else if (numberGuess > jobAmount){
      alert('Sorry! ' + numberGuess + ' is too high!');

      // Catchall to help with all random cases.
    } else{
      alert('I don\'t understand your answer! Please try again! ');
    }
  }

}
// This do-while loop will check if a user has confirmed or cancelled. This will then either ask them repeatedly until they say yes, or congradulate them and move on.

// Function for Quiz guess
function carsGuessing() {
  // Question 7: Here we are required to have another guessing questions. This question has 3 requirements.
  // 1. Answer's must be stored in an array. 2. The user only has 6 tries. 3. The user gets a message if they guess correct of if they run out of tries.

  var avaliableTries = 6;
  var oldCars = ['t','ford','chevy','toyota'];
  console.log('answers: ' + oldCars);
  var userWinsFlag = false;
  var numberOfGuesses = 0;

  // This loop will keep track of how many attempts the user has and if it's less than avaliableTries, run the quiz loop again.
  for (var attempts = 0; attempts < avaliableTries; attempts++) {

    console.log('-----ATTEMPT LOOP ITTERATION---- : ');
    console.log('Attempts: ' + attempts);

    // Takes the user's guess and transfroms it to lowercase.
    var userGuess = prompt('Can you guess what kind of cars I have driven?');
    userGuess = userGuess.toLowerCase();
    console.log('This is the user\'s guess: ' + userGuess);
    // Adds 1 to the number of user guesses.
    numberOfGuesses += 1;
    // This for loops checks the user's guess to all of all the values stored in oldCars and if it finds a match, returns flips userWinsFlag to true. This will allow the user to see a correct message and break the quiz loop in case there are still more iterations left.
    for (var i = 0; i < oldCars.length; i++) {

      if (userGuess === oldCars[i]){

        userWinsFlag = true;
        break;
      }
    }

    //If the userWinsFlag is true, alerts that it's correct and ends the whole loop.
    if(userWinsFlag){

      alert('Congratulations! That\'s correct!');
      score += 1;
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
}

do {
  if (confirmQuiz) {

    console.log('confirmQuiz:' + confirmQuiz);

  } else {

    console.log('MuwuahahahAHAHAHAH');
    console.log('confirmQuiz: ' + confirmQuiz);

    confirmQuiz = confirm('I\'m sorry, I didn\'t catch that. Would you like to play a game?');
  }

  // Always runs as long as the user declines to take the quiz.
} while (!confirmQuiz);

// lets the user know some basic info about me and sets expectations on how to answer questions
alert('Awesome! My name is Mike and I am currently in coding school! Please make sure to answer the following questions with "Y" or "N" when possible. Thanks!');

// Calls Yes No questions
quizYesNo();

// Calls Guessing Game
guessingGame();

// Calls car quiz
carsGuessing();

var numberOfQuestions = 7;
score = 'Score: ' + score + '/' + numberOfQuestions;
console.log('Score: ' + score);
document.getElementById('score').innerHTML = score;
