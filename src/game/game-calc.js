import readlineSync from 'readline-sync';
import getRandomNumber from '../random-number.js';
import { sayWelcome, getUserName } from '../cli.js';

const displayGameRules = () => console.log('What is the result of the expression?');
const operators = ['+', '*'];
const getRandomOperator = () => {
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];
  return randomOperator;
};
const getUserAnswer = (randomNumber1, randomNumber2, randomOperator) => readlineSync.question(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}\nYour answer: `);

const playRound = () => {
  sayWelcome();
  const userName = getUserName();
  displayGameRules();

  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const currentOperator = getRandomOperator();
    const userAnswer = getUserAnswer(randomNumber1, randomNumber2, currentOperator);
    let resultExpression = 0;

    switch (currentOperator) {
      case '+':
        resultExpression = randomNumber1 + randomNumber2;
        break;
      case '*':
        resultExpression = randomNumber1 * randomNumber2;
        break;
      default:
    }
    if (+userAnswer === resultExpression) {
      correctAnswerCount += 1;
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${resultExpression}.\nLet's try again, ${userName}!`);
      break;
    }
    if (correctAnswerCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default playRound;
