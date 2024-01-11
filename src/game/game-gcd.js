import getRandomNumber from '../random-number.js';
import playGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const generateQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);

  const question = `${randomNumber1} ${randomNumber2}`;

  const getArrayOfDividers = () => {
    const empyArray = [];
    const smallerRandomNumber = Math.min(randomNumber1, randomNumber2);

    for (let j = 1; j <= smallerRandomNumber; j += 1) {
      if (randomNumber1 % j === 0 && randomNumber2 % j === 0) {
        empyArray.push(j);
      }
    }
    return empyArray;
  };

  const arrayOfDividers = getArrayOfDividers(randomNumber1, randomNumber2);
  let greaterDivider = 1;

  for (let i = 0; i < arrayOfDividers.length; i += 1) {
    if (randomNumber1 % arrayOfDividers[i] === 0 && randomNumber2 % arrayOfDividers[i] === 0) {
      greaterDivider = arrayOfDividers[i];
    }
  }
  const correctAnswer = greaterDivider;
  return { question, correctAnswer };
};
export default () => playGame(gameRules, generateQuestionAndAnswer);
