import readlineSync from 'readline-sync';
import getRandomNumber from '../random-number.js';
import { sayWelcome, getUserName } from '../cli.js';

const displayGameRules = () => console.log('What number is missing in the progression?');
const getUserAnswer = (question) => readlineSync.question(`Question: ${question} \nYour answer: `);
const getArrayOfNumbers = (initialNumber, progressionStep) => {
  const empyArray = [];
  const countOfArrayItems = 10;

  for (let i = 0; i < countOfArrayItems; i += 1) {
    empyArray.push(initialNumber + i * progressionStep);
  }
  return empyArray;
};

const playRound = () => {
  sayWelcome();
  const userName = getUserName();
  displayGameRules();

  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const initialNumber = getRandomNumber(0, 20);
    const progressionStep = getRandomNumber(1, 10);
    const arrayOfProgression = getArrayOfNumbers(initialNumber, progressionStep);
    const randomIndex = getRandomNumber(0, arrayOfProgression.length - 1);

    const temp = arrayOfProgression[randomIndex];
    arrayOfProgression[randomIndex] = '..';
    const userAnswer = getUserAnswer(arrayOfProgression.join(' '));

    if (+userAnswer === temp) {
      correctAnswerCount += 1;
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${temp}.\nLet's try again, ${userName}!`);
      break;
    }
    if (correctAnswerCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default playRound;
