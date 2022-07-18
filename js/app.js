'use strict';

let correct=0;

function littleGame() {
  let userName = prompt('Hello! I go by Bert. What\'s your name?');
  console.log(userName + ' is their answer');
  let playGame = prompt(userName + '? Well it\'s nice to meet ya. I wanna play a lil game. A yes or no game. Play along? Waddaya say? Y or N').toLowerCase();
  console.log(playGame);
  if (playGame === 'yes' || playGame === 'y') {
    alert('That\'s actually the correct answer. We already started!');
    correct++;
  } else if (playGame === 'no' || playGame === 'n') {
    alert('That\'s the wrong answer. You didn\'t have a choice, heh heh. Let\'s start.');
  }
}
littleGame();

function bornYes() {
  let quest1 = prompt('Was I, in fact, born yesterday?').toLowerCase();
  console.log(quest1);

  if (quest1 === 'yes' || quest1 === 'y') {
    alert('Wrong! Next Question.');
  } else if (quest1 === 'no' || quest1 === 'n') {
    correct++;
    alert('Correct! Next Question');
  }
}
bornYes();

function schmuckTo() {
  let quest2 = prompt('Do I, in fact, look like a shmuck to you?').toLowerCase();
  console.log(quest2);

  if (quest2 === 'yes' || quest2 === 'y') {
    alert('Wrong! Next Question.');
  } else if (quest2 === 'no' || quest2 === 'n') {
    correct++;
    alert('Correct! Next Question');
  }
}
schmuckTo();

function amClown() {
  let quest3 = prompt('Am I a clown?').toLowerCase();
  console.log(quest3);

  if (quest3 === 'yes' || quest3 === 'y') {
    alert('Wrong! Next Question.');
  } else if (quest3 === 'no' || quest3 === 'n') {
    alert('Correct! Next Question');
    correct++;
  }
}
amClown();

function amuseYou() {
  let quest4 = prompt('Do I amuse you?').toLowerCase();
  console.log(quest4);
  if (quest4 === 'yes' || quest4 === 'y') {
    alert('... Correct! Haha Cause I was just pullin your leg this whole time!');
    correct++;
  } else if (quest4 === 'no' || quest4 === 'n') {
    alert('I don\'t amuse you??? Well that\'s too bad... cause I was merely jokin around! Haha');
  }
}
amuseYou();

alert('I\'m having fun! Are you having fun? It don\'t matter! Let\'s keep going!');
alert('You\'ll have 4 guesses for this next question.');

let guessLeft = 3;

function guessAge() {
  for (let i = guessLeft; i >= 0; i--) {
    let guessName = prompt('How old am I between 30 and 35?');
    console.log(guessName + ' is their guess');
    if (guessName === '31') {
      alert('Wow! You\'re pretty good at this!');
      correct++;
      break;
    } else if (guessName < '31') {
      alert('Nope! You\'re too low and have ' + i + ' guesses left!');
    } else if (guessName > '31') {
      alert('Nope! You\'re too high and have ' + i + ' guesses left!');
    } if (i === 0) {
      alert('I\'m 31. Game Over! Loser!');
    }
  }
}
guessAge();

alert('Let\'s do one last question. You\'ll have 6 attempts. You\'ll also be able to see your choices. Good luck!');

let supers = ['superman ', 'batman ', 'ironman ', 'spiderman ', 'aquaman ', 'omniman ', 'antman'];

function superHero() {
  for (let i = 5; i >= 0; i--) {
    let lastQ = prompt('Who is my favorite superhero?' + supers).toLowerCase();
    if (lastQ === 'batman') {
      alert('Someone has been paying attention!');
      correct++;
      break;
    } else if (lastQ !== 'batman') {
      alert('Are you joking? Try harder! You have ' + i + ' chances left!');
    } if (i === 0) {
      alert('You dont know me very well... You lose!');
    }
  }
}
superHero();

alert('Here is your score! ' + correct + '/7 But it\'s not about the numbers! It\'s about the fun! Thanks for playing!');
