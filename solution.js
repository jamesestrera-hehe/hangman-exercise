import promp from "./promp.js";
import data from "./data.js";

/* Get one random word from data */
const word = data[Math.floor(Math.random() * data.length)];

async function runGame () {
    const answer =  await promp(`${word.question} `);

    if (answer.toLowerCase() !== word.word) {

    } else {
        console.log("Congratulations! You've guessed the word correctly.");
        return;
    }


    return runGame();
}



runGame();