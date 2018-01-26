import startEngine from '..';
import * as helper from '../helper';

const description = 'What is the result of the expression?';

const sum = (a, b) => a + b;
const deduct = (a, b) => a - b;
const multiply = (a, b) => a * b;

const expressions = { sum, deduct, multiply };

const signs = { sum: '+', deduct: '-', multiply: '*' };

const generateArgs = (expression) => {
  const args = {
    sum: [helper.generateRandom(1, 100), helper.generateRandom(1, 100)],
    deduct: [helper.generateRandom(1, 100), helper.generateRandom(1, 100)],
    multiply: [helper.generateRandom(1, 100), helper.generateRandom(1, 10)],
  };
  return args[expression.name];
};

const generator = () => {
  const operations = Object.keys(expressions);
  const operation = operations[helper.generateRandom(0, operations.length - 1)];
  const expression = expressions[operation];
  const [first, second] = generateArgs(expression);
  return { question: `${first} ${signs[operation]} ${second}`, result: `${expression(first, second)}` };
};

export default () => startEngine({ description, generator });
