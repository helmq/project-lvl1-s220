import startEngine from '..';
import * as helper from '../helper';

const description = 'Is this number prime ?';

const isPrime = (num) => {
  if (num === 1) return false;
  const iter = (acc) => {
    if (num === acc) {
      return true;
    }
    if (num % acc === 0) {
      return false;
    }
    return iter(acc + 1);
  };
  return iter(2);
};

const parser = (arg) => {
  const vars = {
    false: 'no',
    true: 'yes',
  };
  return vars[arg];
};

const generator = () => {
  const arg = helper.generateRandom(1, 100);
  return { question: `${arg}`, result: parser(isPrime(arg)) };
};

export default () => startEngine({ description, generator });
