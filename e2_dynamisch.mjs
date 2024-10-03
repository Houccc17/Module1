
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let name = await userInput.question("Wat is je naam?");
let age = await userInput.question("Hoe oud ben je?");
let favgame = await userInput.question("Wat is je lievelings game?");

console.log('Hallo '+ name +', ik zie dat je '+ age +' jaar oud bent en dat jouw favoriete game '+ favgame +' is.');

process.exit(); 