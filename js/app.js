'use strict';

alert('Hey eh, how you doing?');

let yourName = prompt('I go by Bert. Whats your name?');
console.log(yourName);

let playGame = prompt(yourName + '? Well it\'s nice to meet you. I\'d like to play a game! Would you care to indulge me?').toLocaleLowerCase();
console.log(playGame);

if (playGame === 'yes' || playGame === 'y') {
  alert('Excellent. Lets begin!');
} else if (playGame === 'no' || playGame === 'n') {
  alert('C\'mon, it\'ll be quick, I promise. Let\'s start.');
}

let quest1 = prompt('Was I, in fact, born yesterday?');
console.log(quest1);

if (quest1 === 'yes' || quest1 === 'y') {
  alert('Wrong! Next Question.');
} else if (quest1 === 'no' || quest1 === 'n') {
  alert('Correct! Next Question');
}

let quest2 = prompt('Do I, in fact, look like a shmuck to you?');
console.log(quest2);

if (quest2 === 'yes' || quest2 === 'y') {
  alert('Wrong! Next Question.');
} else if (quest2 === 'no' || quest2 === 'n') {
  alert('Correct! Next Question');
}

let quest3 = prompt('Am I a clown?');
console.log(quest3);

if (quest3 === 'yes' || quest3 === 'y') {
  alert('Wrong! Next Question.');
} else if (quest3 === 'no' || quest3 === 'n') {
  alert('Correct! Next Question');
}

let quest4 = prompt('Do i amuse you?');

if (quest4 === 'yes' || quest4 === 'y') {
  alert('Wrong! Next Question.');
} else if (quest4 === 'no' || quest4 === 'n') {
  alert('Correct! Next Question');
}

