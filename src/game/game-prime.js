import getRandomNumber from '../random-number.js';
import playGame from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const dividerLimit = Math.sqrt(number);

  for (let i = 2; i <= dividerLimit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(2, 100);
  const question = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => playGame(gameRules, generateQuestionAndAnswer);
