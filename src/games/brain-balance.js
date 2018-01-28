import startEngine from '..';
import * as helper from '../helper';

const description = 'Balance the given number.';

const toArr = arg => Array.from(`${arg}`);

const sortDigits = str => toArr(str).sort().join('');

const isBalanced = (num) => {
  const sorted = sortDigits(num);
  const arr = toArr(sorted);
  const min = parseInt(arr[0], 10);
  const max = parseInt(arr[arr.length - 1], 10);
  return max - min <= 1;
};

const balance = (num) => {
  if (isBalanced(num)) {
    return num;
  }
  const sorted = sortDigits(num);
  const arr = toArr(sorted);
  const min = parseInt(arr[0], 10);
  const max = parseInt(arr[arr.length - 1], 10);
  const diff = max - min;
  const dec = Math.floor(diff / 2);
  const inc = diff - dec;
  const rest = arr.slice(1, arr.length - 1).join('');
  const newNum = sortDigits(parseInt(`${min + inc}${rest}${max - dec}`, 10));
  return balance(newNum);
};

const generator = () => {
  const arg = helper.generateRandom(1, 100000);
  return { question: `${arg}`, result: `${balance(arg)}` };
};

export default () => startEngine(generator, description);
