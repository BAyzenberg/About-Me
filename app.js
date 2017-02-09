'use strict';

// Grabs the user's confirm and stores it in confirmQuiz
var confirmQuiz = confirm('Hello, would you like to take a quiz?');

// Checks if confirmQuiz is true or false and then console.logs
if (confirmQuiz){
  console.log('Awesome, Lets get started!');
} else {
  console.log('Too Bad, starting anyway.');
}

// lets the user know some basic info about me and sets expectations on how to answer questions
alert('Awesome! My name is Mike and I am currently in coding school! Please make sure to answer the following questions with "Y" or "N" when possible. Thanks!');

// Starts the quiz by asking the user their first question and store their answer in quizResponseOne ( we will have multiple quizResponseX variables)
var quizResponseOne = prompt('Does Mike own a business?');

// Check quizResponseOne with edge case and logs something to the console.
if(quizResponseOne.toUpperCase() === 'Y' || 'YES'){
  console.log('Awesome! I own a window cleaning busienss called Apple Windows and Gutter!');
} else {
  console.log('Sorry, that\'s incorrect! If you want your windows or gutters cleaned then give us a call!');
}

// Second question
var quizResponseTwo = prompt('Does Mike play PC games?');

// Checks quizResponseTwo with edgecase and logs something to the console.
if (quizResponseTwo.toUpperCase() === 'Y' || 'YES') {
  console.log('Yeah I do. I\'ve got like 200 games on steam over the last 10 years');
} else {
  console.log('Incorrect! I have a S*** ton of games on steam yet I\'m on Blizzard games like 90% of the time.');
}

// Third question
var quizResponseThree = prompt('Does Mike have a truck?');

// Checks quizResponseThree with edgecase and logs something to the console.
if (quizResponseThree.toUpperCase() === 'Y' || 'YES') {
  console.log('Yep! Once spring gets here my crew will use it for our business!');
} else {
  console.log('Wrong. I have small work truck that my and my crew use for my business.');
}
// Fourth question.
var quizResponseFour = prompt('Does Mike like MMA?');

// Checks quizResponseFour with edgecase and logs something to the console.
if (quizResponseFour.toUpperCase() === 'Y' || 'YES') {
  console.log('Yeah, but I\'m not very good. You can youTube a video of my getting my A$$ kicked in about 43 seconds hahah' );
} else {
  console.log('Nope, I actually do like MMA! I would like to get back into it again someday!');
}
// Fifth question
var quizResponseFive = prompt('Does Mike like Thai food?');

// check quizResponseFive with edgecase and logs something to the console.
if (quizResponseFive.toUpperCase() === 'Y' || 'YES') {
  console.log('Correct. More like I like Pad Thai food with my Peanut Sacue but whatever...');
} else {
  console.log('Wrong! I f!*$ing love Thai food!');
}
