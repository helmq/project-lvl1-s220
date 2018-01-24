import { getResult, gameIter } from './abstract';
import { generateRandom, isEven } from '../math';

const parseResult = (result) => {
  const parse = { false: 'no', true: 'yes' };
  return parse[result];
};

const generateQuestion = () => {
  const number = generateRandom(1, 100);
  return {
    string: number.toString(),
    result: parseResult(getResult(isEven, number)),
  };
};

const parseAnswer = (answer, result) => {
  const correct = new Set(['yes', 'no']);
  return correct.has(answer) && answer === result;
};

const start = (askQuestion, getAnswer) =>
  gameIter(generateQuestion, askQuestion, getAnswer, parseAnswer);

export default start;
