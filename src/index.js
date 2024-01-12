import readlineSync from 'readline-sync';

const playGame = (gameRules, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const { question, correctAnswer } = generateQuestionAndAnswer();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const errorMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;

    if (userAnswer === correctAnswer.toString()) {
      correctAnswerCount += 1;
      console.log('Correct!');
    } else {
      console.log(errorMessage);
      break;
    }
  }
  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default playGame;
