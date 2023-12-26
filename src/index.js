import readlineSync from 'readline-sync';
import _ from 'lodash';

const getRandomNumber = () => _.random(0, 100);
const sayWelcome = () => console.log('Welcome to the Brain Games!');
const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export { sayWelcome, getUserName, getRandomNumber };
