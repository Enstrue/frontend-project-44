import readlineSync from 'readline-sync';
import getRandomNumber from '../index.js';
import { sayWelcome, getUserName } from '../cli.js';

// const isPrime = (number) => number % 1 === 0 && number % number === 0;
const isPrime = (number) => {
  const empyArray = [];
  const stack = [];
  for (let i = 1; i <= number; i += 1) {
    empyArray.push(i);
  }

  for (let j = 0; j < empyArray.length; j += 1) {
    if (number % empyArray[j] === 0) {
      stack.push(j);
    }
  }
  return stack.length;
};

const isCorrectAnswer = (number) => (isPrime(number) === 2 ? 'yes' : 'no');
const displayGameRules = () => console.log('Answer "yes" if the number is prime, otherwise answer "no".');
const getUserAnswer = (randomNumber) => readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

const playRound = () => {
  sayWelcome();
  const userName = getUserName();
  displayGameRules();

  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const randomNumber = getRandomNumber(2, 100);
    const userAnswer = getUserAnswer(randomNumber);
    const correctAnswer = isCorrectAnswer(randomNumber);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isCorrectAnswer(randomNumber)}.\nLet's try again, ${userName}`);
      break;
    }
    if (correctAnswerCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default playRound;