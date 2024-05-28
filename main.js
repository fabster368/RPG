import inquirer from "inquirer";
import { userInput, gameOn, maverick, map } from "./grid.js";


const questions = [
  
    {
      type: 'expand',
      name: 'options', // key
      message: 'Choose your next move',
      choices: [
        {
          key: 'w',
          name: 'Up',
          value: 'up',
        },
        {
          key: 's',
          name: 'Down',
          value: 'down',
        },
        {
          key: 'a',
          name: 'Left',
          value: 'left',
        },
        {
          key: 'd',
          name: 'Right',
          value: 'right',
        },
      ],
    },
  ];

// Prompt the player with questions
const playerPrompt = () => {
  return inquirer.prompt(questions)
}

// Game loop
const executePrompt = async () => {
  while (gameOn === true) {
    console.log("-----------------")
    maverick.showStats();
    console.log("-----------------")
    const answers = await playerPrompt()
    userInput(answers.options);
    map.displayGrid()
  }
  }

const startGame = async () => {
    await executePrompt()
}

startGame();

