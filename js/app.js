'use strict';

alert('Oi! How you doin?');

let yourName = prompt('I goes by Bert. What\'s your name?');
console.log(yourName);

let playGame = prompt(yourName + '? Well it\'s nice to meet ya. I wanna play a lil game. A yes or no game. Play along? Waddaya say? Y or N').toLocaleLowerCase();
console.log(playGame);

if (playGame === 'yes' || playGame === 'y') {
  alert('That\'s actually the correct answer. We already started!');
} else if (playGame === 'no' || playGame === 'n') {
  alert('That\'s the wrong answer. You didn\'t have a choice, heh heh. Let\'s start.');
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

let quest4 = prompt('Do I amuse you?');

if (quest4 === 'yes' || quest4 === 'y') {
  alert('... Good! Haha I was just pullin your leg!');
} else if (quest4 === 'no' || quest4 === 'n') {
  alert('Well that\'s too bad! I was merely jokin around! Haha');
}

alert('Thank\'s for being a good sport!')
