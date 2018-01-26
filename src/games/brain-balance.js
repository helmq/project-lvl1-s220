import startEngine from '..';
import * as helper from '../helper';

const description = 'Balance the given number.';

const balance = (num) => {
  const numToArr = nn => Array.from(`${nn}`);
  const sorted = numToArr(num).sort();
  const min = parseInt(sorted[0], 10);
  const max = parseInt(sorted[sorted.length - 1], 10);
  const diff = max - min;
  if (diff > 1) {
    const dec = Math.floor(diff / 2);
    const newMin = min + (diff - dec);
    const newMax = max - dec;
    const newNum = [newMin, ...sorted.slice(1, sorted.length - 1), newMax].join('');
    return balance(newNum);
  }
  return sorted.join('');
};

const generator = () => {
  const arg = helper.generateRandom(1, 100000);
  return { question: `${arg}`, result: balance(arg) };
};

export default () => startEngine({ description, generator });
