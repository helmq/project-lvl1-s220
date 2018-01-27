import startEngine from '..';
import * as helper from '../helper';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};

const generator = () => {
  const [first, second] = [helper.generateRandom(-100, 100), helper.generateRandom(-100, 100)];
  return { question: `${first} ${second}`, result: `${gcd(first, second)}` };
};

export default () => startEngine(generator, description);
