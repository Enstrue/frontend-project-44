import readlineSync from 'readline-sync';
import sayWelcome from './cli.js';

const playGame = (gameRules, generateQuestionAndAnswer) => {
  const userName = sayWelcome();
  console.log(gameRules);

  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const { question, correctAnswer } = generateQuestionAndAnswer();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (+userAnswer === correctAnswer) {
      correctAnswerCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default playGame;
