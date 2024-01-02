import readlineSync from 'readline-sync';
import getRandomNumber from '../index.js';
import { sayWelcome, getUserName } from '../cli.js';

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
const getUserAnswer = (randomNumber) => {
  let userAnswer;

  do {
    console.log('Answer "yes" if the number is prime, otherwise answer "no".');
    userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  } while (!userAnswer);

  return userAnswer;
};

const playRound = () => {
  sayWelcome();
  const userName = getUserName();

  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const randomNumber = getRandomNumber(2, 100);
    const userAnswer = getUserAnswer(randomNumber);
    const correctAnswer = isCorrectAnswer(randomNumber);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (correctAnswerCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playRound;
