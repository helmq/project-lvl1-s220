import { cliOutput, generateQuestion } from './engine';
import * as helper from '../helper';

const gcd = ([a, b]) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd([b, a % b]);
};

const generateArgs = () =>
  [helper.generateRandom(-100, 100), helper.generateRandom(-100, 100)];

const generateQuestionString = ([a, b]) => `${a} ${b}`;

const parser = arg => parseInt(arg, 10);

const start = () => {
  const generator = generateQuestion({ gcd }, generateQuestionString, generateArgs);
  return cliOutput(generator, parser, 'Find the greatest common divisor of given numbers.');
};

export default start;
