import getRandomNumber from '../random-number.js';
import playGame from '../index.js';

const gameRules = 'What is the result of the expression?';

const generateQuestionAndAnswer = () => {
  const operators = ['+', '*'];
  const getRandomOperator = () => {
    const randomIndex = Math.floor(Math.random() * operators.length);
    const randomOperator = operators[randomIndex];
    return randomOperator;
  };

  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const currentOperator = getRandomOperator();

  const question = `${randomNumber1} ${currentOperator} ${randomNumber2}`;
  let correctAnswer = 0;

  switch (currentOperator) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case '*':
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    default:
  }
  return { question, correctAnswer };
};

export default () => playGame(gameRules, generateQuestionAndAnswer);
