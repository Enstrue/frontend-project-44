import getRandomNumber from '../random-number.js';
import playGame from '../index.js';

const gameRules = 'What number is missing in the progression?';
const getArrayOfNumbers = () => {
  const initialNumber = getRandomNumber(0, 20);
  const progressionStep = getRandomNumber(1, 10);
  const arrayOfNumbers = [];
  const countOfArrayItems = getRandomNumber(5, 10);

  for (let i = 0; i < countOfArrayItems; i += 1) {
    arrayOfNumbers.push(initialNumber + i * progressionStep);
  }
  return arrayOfNumbers;
};

const generateQuestionAndAnswer = () => {
  const { initialNumber, progressionStep } = getArrayOfNumbers();
  const arrayOfProgression = getArrayOfNumbers(initialNumber, progressionStep);
  const randomIndex = getRandomNumber(0, arrayOfProgression.length - 1);

  const temp = arrayOfProgression[randomIndex];
  arrayOfProgression[randomIndex] = '..';
  const correctAnswer = temp;
  const question = arrayOfProgression.join(' ');
  return { question, correctAnswer };
};
export default () => playGame(gameRules, generateQuestionAndAnswer);
