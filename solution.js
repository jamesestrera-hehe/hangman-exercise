import promp from "./promp.js";
import data from "./data.js";

/* Get one random word from data */
const word = data[Math.floor(Math.random() * data.length)];

async function runGame () {
    let attempts = word.word.length;
    let progress = "";
    
    while (attempts > 0) {
        const answer =  await promp(`${word.question} `);

        if (answer.toLowerCase() === word.word) {
            console.log("Congratulations! You've guessed the word correctly.");
            return;
        } else {
            attempts--;
            progress = "HANGMAN".slice(0, word.word.length - attempts);
            
            if (attempts === 0){
                console.log(`failed to guessed the word. The correct answer is ${word.word}".`);
                return;
            } else if (attempts === 1) {
                console.log(`Progress: ${progress}`);
                console.log(`Hint: ${word.hint}`);
            } else {
                console.log(`Wrong! ${progress} (${attempts} attempts left)`);
            }
        }
    }
}

runGame();