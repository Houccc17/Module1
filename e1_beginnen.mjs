import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeNaam = 'Houcine'
let age = '19'
let favorietespel = 'Fifa'

let jeLeeftijd = await userInput.question('Hoe oud ben je? ');
console.log('Hallo ' + jeNaam + ' Ik ben '+ age +' jaar oud.' + 'En mijn favoriete game is ' + 'favorietespel);

process.exit();