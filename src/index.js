import readlineSync from 'readline-sync';
import { checkEven, getRandom } from './math';
import upFirstLetter from './string';

const welcome = () => 'Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n';

const askName = () => readlineSync.question('May I have your name ? ');

const greet = name => `Hello, ${name}!\n`;

const question = number => `Question: ${number}`;

const answer = () => readlineSync.question('Your answer: ');

const failure = (name, answ, corr) =>
  `'${answ}' is wrong answer ;(. Correct answer was '${corr}'.\nLet's try again, ${name}`;

const getAnswer = (isEven) => {
  const toCompare = { true: 'yes', false: 'no' };
  return toCompare[isEven];
};

const correctOptions = new Set(['yes', 'no']);

const start = () => {
  console.log(welcome());
  const name = upFirstLetter(askName());
  console.log(greet(name));
  const questionsCount = 3;
  let count = 0;
  while (count < questionsCount) {
    const num = getRandom(1, 100);
    console.log(question(num));
    const answ = answer();
    if (!correctOptions.has(answ) || getAnswer(checkEven(num)) !== answ) {
      console.log(failure(name, answ, getAnswer(checkEven(num))));
      return;
    }
    console.log('Correct!');
    count += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default start;
export { askName, greet };
