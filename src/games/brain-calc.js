import { generateQuestion, cliOutput } from './engine';
import * as helper from '../helper';

const sum = ([a, b]) => a + b;
const deduct = ([a, b]) => a - b;
const multiply = ([a, b]) => a * b;

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

const parser = n => parseInt(n, 10);

const start = () => {
  const generator = generateQuestion(expressions, generateQuestionString, generateArgs);
  return cliOutput(generator, parser, 'What is the result of the expression?\n');
};

export default start;
