import _ from 'lodash';
import readlineSync from 'readline-sync';
import { sayWelcome, getUserName } from '../src/cli.js';

const isEven = (number) => number % 2 === 0;
const getRandomNumber = () => _.random(0, 100);
const isCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');
const displayGameRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
const getUserAnswer = (randomNumber) => readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

const playRound = () => {
  sayWelcome();
  const userName = getUserName();
  displayGameRules();

  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const randomNumber = getRandomNumber();
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

playRound();
