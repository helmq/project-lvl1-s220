import { gameIter, getResult } from './abstract';
import { sum, deduct, multiply, generateRandom } from '../math';

const generateArgs = (expression) => {
  const args = {
    sum: [generateRandom(1, 100), generateRandom(1, 100)],
    deduct: [generateRandom(1, 100), generateRandom(1, 100)],
    multiply: [generateRandom(1, 100), generateRandom(1, 10)],
  };
  return args[expression.name];
};

const generateQuestionString = (expression, args) => {
  const [first, second] = args;
  const operations = { sum: '+', deduct: '-', multiply: '*' };
  return `${first} ${operations[expression.name]} ${second}`;
};

const generateQuestion = () => {
  const expressions = [sum, deduct, multiply];
  const expression = expressions[generateRandom(0, expressions.length - 1)];
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

export default start;
