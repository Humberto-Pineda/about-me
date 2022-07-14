'use strict';

alert('Oi! How you doin?');
let userName;
function yourName() {
  userName = prompt('I goes by Bert. What\'s your name?');
  console.log(yourName);
}
yourName();

function littleGame() {
  let playGame = prompt(userName + '? Well it\'s nice to meet ya. I wanna play a lil game. A yes or no game. Play along? Waddaya say? Y or N').toLowerCase();
  console.log(playGame);
  if (playGame === 'yes' || playGame === 'y') {
    alert('That\'s actually the correct answer. We already started!');
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
  }
}
amClown();

function amuseYou() {
  let quest4 = prompt('Do I amuse you?').toLowerCase();

  if (quest4 === 'yes' || quest4 === 'y') {
    alert('... Good! Haha Cause I was just pullin your leg this whole time!');
  } else if (quest4 === 'no' || quest4 === 'n') {
    alert('I don\'t amuse you??? Well that\'s too bad... cause I was merely jokin around! Haha');
  }
}
amuseYou();

alert('I\'m having fun! Are you having fun? Let\'s keep going!');
alert('You\'ll have 4 guesses for this next question.');

let guessLeft = 3;

function guessAge() {
  for (let i = guessLeft; i >= 0; i--) {
    let guessName = prompt('How old am I between 30 and 35?');
    if (guessName === '31') {
      alert('Wow! You\'re pretty good at this!');
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
