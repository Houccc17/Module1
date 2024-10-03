import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { Console } from 'node:console';
const userInput = readline.createInterface({input, output});

let som;
let getal1 = 23;
let getal2 = 2;
            
som = getal1 + getal2;
console.log(som);

let verschil; 
let getal3 = 12;
let getal4 = 6;

verschil = getal3 - getal4;
console.log(verschil);

let maal;
let getal7 = 7;
let getal8 = 8; 

maal = getal7 * getal8
console.log(maal);


let delen;
let getal45 = 45;
let getal242 = 55;
let getal343 = 43;

delen = getal45 / getal343 / getal242;
console.log(delen);

process.exit();