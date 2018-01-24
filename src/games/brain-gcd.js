import { gameIter, getResult } from './engine';
import * as helper from '../helper';

const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};

const generateArgs = () =>
  [helper.generateRandom(-100, 100), helper.generateRandom(-100, 100)];

const generateQuestionString = (a, b) => `${a} ${b}`;

const generateQuestion = () => {
  const args = generateArgs();
  return { string: generateQuestionString(...args), result: getResult(gcd, ...args) };
};

const parseAnswer = (answer, result) => {
  const parsedAnswer = parseInt(answer, 10);
  return !Number.isNaN(parsedAnswer) && result === parsedAnswer;
};

const start = (askQuestions, getAnswer, onTrueAnswer) =>
  gameIter(generateQuestion, parseAnswer, askQuestions, getAnswer, onTrueAnswer);

const startCli = () => {
  const askQuestion = question => console.log(helper.questionMessage(question));
  const onTrueAnswer = () => console.log('Correct!');
  console.log(helper.welcomeMessage('Find the greatest common divisor of given numbers.\n'));
  const name = helper.upFirstLetter(helper.readName());
  console.log(helper.greetMessage(name));
  const result = start(askQuestion, helper.readAnswer, onTrueAnswer);
  if (result === true) {
    console.log(helper.congratulationsMessage(name));
  } else {
    console.log(helper.failureMessage(name, result.answer, result.result));
  }
};

export default startCli;
