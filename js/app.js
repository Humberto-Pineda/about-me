'use strict';

// alert('Oi! How you doin?');

// let yourName = prompt('I goes by Bert. What\'s your name?');
// console.log(yourName);

// let playGame = prompt(yourName + '? Well it\'s nice to meet ya. I wanna play a lil game. A yes or no game. Play along? Waddaya say? Y or N').toLowerCase();
// console.log(playGame);

// if (playGame === 'yes' || playGame === 'y') {
//   alert('That\'s actually the correct answer. We already started!');
// } else if (playGame === 'no' || playGame === 'n') {
//   alert('That\'s the wrong answer. You didn\'t have a choice, heh heh. Let\'s start.');
// }

// let quest1 = prompt('Was I, in fact, born yesterday?').toLowerCase();
// console.log(quest1);

// if (quest1 === 'yes' || quest1 === 'y') {
//   alert('Wrong! Next Question.');
// } else if (quest1 === 'no' || quest1 === 'n') {
//   alert('Correct! Next Question');
// }

// let quest2 = prompt('Do I, in fact, look like a shmuck to you?').toLowerCase();
// console.log(quest2);

// if (quest2 === 'yes' || quest2 === 'y') {
//   alert('Wrong! Next Question.');
// } else if (quest2 === 'no' || quest2 === 'n') {
//   alert('Correct! Next Question');
// }

// let quest3 = prompt('Am I a clown?').toLowerCase();
// console.log(quest3);

// if (quest3 === 'yes' || quest3 === 'y') {
//   alert('Wrong! Next Question.');
// } else if (quest3 === 'no' || quest3 === 'n') {
//   alert('Correct! Next Question');
// }

// let quest4 = prompt('Do I amuse you?').toLowerCase();

// if (quest4 === 'yes' || quest4 === 'y') {
//   alert('... Good! Haha Cause I was just pullin your leg this whole time!');
// } else if (quest4 === 'no' || quest4 === 'n') {
//   alert('I don\'t amuse you??? Well that\'s too bad... cause I was merely jokin around! Haha');
// }

// alert('I\'m having fun! Are you having fun? Let\'s keep going!');
// alert('You\'ll have 4 guesses for this next question.');

// let guessLeft = 3;

// for (let i = guessLeft; i >= 0; i--) {
//   let guessName = prompt('How old am I between 30 and 35?');
//   if (guessName === '31'){
//     alert('Wow! You\'re pretty good at this!');
//     break;
//   } else if (guessName < '31'){
//     alert('Nope! You\'re too low and have ' + i + ' guesses left!');
//   } else if (guessName > '31'){
//     alert('Nope! You\'re too high and have ' + i + ' guesses left!');
//   } if (i === 0){
//     alert('I\'m 31. Game Over! Loser!');
//   }
// }

// alert('Let\'s do one last question. You\'ll have 6 attempts. You\'ll also be able to see your choices. Good luck!');

alert('Who is my favorite superhero?');

let lastQ = ['Superman, Batman, Ironman, Spiderman, Wonder Woman, Omniman, Radioactive Man'];
// let lastA = ['Batman'];
// let lastChance = 6;

for (let i = 0; i < lastQ.length; i++) {
  prompt(lastQ);
  if (lastQ[i] === ['Batman']) {
    console.log('Someone has been paying attention');
  }
  else if (lastQ[i] !=='Batman') {
    console.log('...Are you... joking? Try harder...');
  }
}
