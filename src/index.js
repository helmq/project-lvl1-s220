import readlineSync from 'readline-sync';
import * as helper from './helper';

export default (game, description, numberOfQuestions = 3) => {
  const iter = (count) => {
    if (count === 0) {
      return true;
    }
    const { question, result } = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      return false;
    }
    console.log('Correct!');
    return iter(count - 1);
  };
  console.log('Welcome to the Brain Games!');
  if (description) {
    console.log(`${description}\n`);
  }
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${helper.upFirstLetter(name)}!`);
  const result = iter(numberOfQuestions);
  if (result === true) {
    console.log(`Congratulations, ${helper.upFirstLetter(name)}!`);
  } else {
    console.log(`Let's try again, ${helper.upFirstLetter(name)}!`);
  }
};
