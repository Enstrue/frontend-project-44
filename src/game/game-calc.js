import getRandomNumber from '../random-number.js';
import playGame from '../index.js';

const gameRules = 'What is the result of the expression?';
const getRandomOperator = () => {
  const operators = ['+', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];
  return randomOperator;
};

const calculate = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const currentOperator = getRandomOperator();
  let correctAnswer = 0;

  switch (currentOperator) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case '*':
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    default:
      throw new Error(`Unknown current operator: '${currentOperator}'!`);
  }

  return {
    randomNumber1, randomNumber2, currentOperator, correctAnswer,
  };
};

const generateQuestionAndAnswer = () => {
  const {
    randomNumber1, currentOperator, randomNumber2, correctAnswer,
  } = calculate();
  const question = `${randomNumber1} ${currentOperator} ${randomNumber2}`;
  return { question, correctAnswer };
};

export default () => playGame(gameRules, generateQuestionAndAnswer);
