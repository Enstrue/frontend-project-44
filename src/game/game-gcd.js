import getRandomNumber from '../random-number.js';
import playGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const getArrayOfDividers = (num) => {
  const dividers = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      dividers.push(i);
    }
  }
  return dividers;
};

const generateQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;

  const arrayOfDividers1 = getArrayOfDividers(randomNumber1);
  const arrayOfDividers2 = getArrayOfDividers(randomNumber2);
  const commonDividers = arrayOfDividers1.filter((divider) => arrayOfDividers2.includes(divider));
  const greaterDivider = Math.max(...commonDividers);

  const correctAnswer = greaterDivider;
  return { question, correctAnswer };
};
export default () => playGame(gameRules, generateQuestionAndAnswer);
