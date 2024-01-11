import getRandomNumber from '../random-number.js';
import playGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const generateQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);

  const question = `${randomNumber1} ${randomNumber2}`;

  const getArrayOfDividers = (num1, num2) => {
    const empyArray = [];
    const smallerRandomNumber = Math.min(num1, num2);

    for (let j = 1; j <= smallerRandomNumber; j += 1) {
      if (num1 % j === 0 && num2 % j === 0) {
        empyArray.push(j);
      }
    }
    return empyArray;
  };

  const arrayOfDividers = getArrayOfDividers(randomNumber1, randomNumber2);
  const greaterDivider = Math.max(...arrayOfDividers);

  const correctAnswer = greaterDivider;
  return { question, correctAnswer };
};
export default () => playGame(gameRules, generateQuestionAndAnswer);
