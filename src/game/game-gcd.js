import readlineSync from 'readline-sync';
import getRandomNumber from '../index.js';
import { sayWelcome, getUserName } from '../cli.js';

const displayGameRules = () => console.log('Find the greatest common divisor of given numbers.');
const getUserAnswer = (randomNumber1, randomNumber2) => readlineSync.question(`Question: ${randomNumber1} ${randomNumber2}\nYour answer: `);
const getArrayOfDividers = (randomNumber1, randomNumber2) => {
  const empyArray = [];
  const smallerRandomNumber = Math.min(randomNumber1, randomNumber2);

  for (let j = 1; j <= smallerRandomNumber; j += 1) {
    if (randomNumber1 % j === 0 && randomNumber2 % j === 0) {
      empyArray.push(j);
    }
  }
  return empyArray;
};

const playRound = () => {
  sayWelcome();
  const userName = getUserName();
  displayGameRules();

  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const userAnswer = getUserAnswer(randomNumber1, randomNumber2);
    const arrayOfDividers = getArrayOfDividers(randomNumber1, randomNumber2);
    let greaterDivider = 1;

    for (let i = 0; i < arrayOfDividers.length; i += 1) {
      if (randomNumber1 % arrayOfDividers[i] === 0 && randomNumber2 % arrayOfDividers[i] === 0) {
        greaterDivider = arrayOfDividers[i];
      }
    }

    if (+userAnswer === greaterDivider) {
      correctAnswerCount += 1;
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${greaterDivider}.\nLet's try again, ${userName}!`);
      break;
    }
    if (correctAnswerCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default playRound;
