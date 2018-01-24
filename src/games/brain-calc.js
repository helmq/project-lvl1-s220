import { gameIter, getResult } from './engine';
import * as helper from '../helper';

const generateArgs = (expression) => {
  const args = {
    sum: [helper.generateRandom(1, 100), helper.generateRandom(1, 100)],
    deduct: [helper.generateRandom(1, 100), helper.generateRandom(1, 100)],
    multiply: [helper.generateRandom(1, 100), helper.generateRandom(1, 10)],
  };
  return args[expression.name];
};

const generateQuestionString = (expression, args) => {
  const [first, second] = args;
  const operations = { sum: '+', deduct: '-', multiply: '*' };
  return `${first} ${operations[expression.name]} ${second}`;
};

const generateQuestion = () => {
  const expressions = [helper.sum, helper.deduct, helper.multiply];
  const expression = expressions[helper.generateRandom(0, expressions.length - 1)];
  const args = generateArgs(expression);
  return {
    string: generateQuestionString(expression, args),
    result: getResult(expression, ...args),
  };
};

const parseAnswer = (answer, result) => {
  const parsedAnswer = parseInt(answer, 10);
  return !Number.isNaN(parsedAnswer) && result === parsedAnswer;
};

const start = (askQuestion, getAnswer) =>
  gameIter(generateQuestion, askQuestion, getAnswer, parseAnswer);

const cliStart = () => {
  console.log(helper.welcomeMessage('What is the result of the expression?\n'));
  const name = helper.upFirstLetter(helper.readName());
  console.log(helper.greetMessage(name));
  const askQuestion = (question) => {
    console.log(helper.questionMessage(question));
  };
  const result = start(askQuestion, helper.readAnswer);
  if (result === true) {
    console.log(helper.congratulationsMessage(name));
  } else {
    console.log(helper.failureMessage(name, result.answer, result.result));
  }
};

export default cliStart;
