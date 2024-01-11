import getRandomNumber from '../random-number.js';
import playGame from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(2, 100);
  const question = `${randomNumber}`;

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
  const correctAnswer = isCorrectAnswer(randomNumber);

  return { question, correctAnswer };
};

export default () => playGame(gameRules, generateQuestionAndAnswer);
