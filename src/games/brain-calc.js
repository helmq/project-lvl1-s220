import startEngine from './engine';
import * as helper from '../helper';

const description = 'What is the result of the expression?';

const sum = (a, b) => a + b;
const deduct = (a, b) => a - b;
const multiply = (a, b) => a * b;

const expressions = { sum, deduct, multiply };

const generateArgs = (expression) => {
  const args = {
    sum: [helper.generateRandom(1, 100), helper.generateRandom(1, 100)],
    deduct: [helper.generateRandom(1, 100), helper.generateRandom(1, 100)],
    multiply: [helper.generateRandom(1, 100), helper.generateRandom(1, 10)],
  };
  return args[expression.name];
};

const generateQuestionString = (args, expression) => {
  const [first, second] = args;
  const operations = { sum: '+', deduct: '-', multiply: '*' };
  return `${first} ${operations[expression.name]} ${second}`;
};

const generator = () => {
  const operations = Object.keys(expressions);
  const expression = expressions[operations[helper.generateRandom(0, operations.length - 1)]];
  const args = generateArgs(expression);
  return { question: generateQuestionString(args, expression), result: `${expression(...args)}` };
};

export default () => startEngine({ description, generator });
