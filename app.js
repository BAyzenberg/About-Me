'use strict';

var confirmQuiz = confirm('Hello, would you like to take a quiz?');

if (confirmQuiz){
  console.log('Awesome, Lets get started!');
} else {
  console.log('Too Bad, starting anyway.');
}

var quizResponseOne = prompt('Please answer with Y or N. Does Adam have a dog?');

if(quizResponseOne.toUpperCase() === "Y"){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too Bad, you were wrong. Adam has a dog');
}
