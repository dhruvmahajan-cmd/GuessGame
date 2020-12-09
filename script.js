'use strict';

// let messageSelector = document.querySelector('.message').textContent;

// console.log(messageSelector); // use document.querySelector to selct the class

// document.querySelector('.message').textContent = 'Correct Number!🚄🚄';

// // What is DOM and DOM Manipulation?
// // Selecting element from the page and interacting with elements on the page
// // Document Object MODEL: Connection between HTML point and JS

// // DOM !== Javascript
// // DOM is a part of Web APIS which can interact with JS
// // Timers and Fetch APIS

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// Handling Events

// We need an event listenner

let topScore = 0;
let highScore = 5;
const secretNumber = Math.trunc(Math.random() * 10) + 1;

const displayMessages = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When no value was entered
  if (highScore > 1) {
    if (!guess) {
      displayMessages('Please Enter Some Value 🙄');
    }
    // When guess is right
    else if (guess === secretNumber) {
      displayMessages('Woah!! You got it right 😎');
      document.querySelector('body').style.backgroundColor = '#60b100';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (topScore < highScore) {
        topScore = highScore;
        document.querySelector('.highscore').textContent = topScore;
      }
    }
    //when guess is wrong
    else if (guess !== secretNumber) {
      displayMessages(
        guess > secretNumber
          ? ' Your guess is high relax 🤐'
          : ' Your guess is low 🤐'
      );
      highScore = highScore - 1;
      document.querySelector('.score').textContent = highScore;
    }
  }
  // when lost the game
  else {
    document.querySelector('.score').textContent = '🤳';
    displayMessages('You lost the game take a chill 🗽');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  highScore = 5;
  document.querySelector('.score').textContent = highScore;
  const secretNumber = Math.trunc(Math.random() * 10) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayMessages('Start guessing...');
});
