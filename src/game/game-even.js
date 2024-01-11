import getRandomNumber from '../random-number.js';
import playGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber();
  const question = `${randomNumber}`;
  const isEven = (number) => number % 2 === 0;
  const isCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');
  const correctAnswer = isCorrectAnswer(randomNumber);
  return { question, correctAnswer };
};

export default () => playGame(gameRules, generateQuestionAndAnswer);
