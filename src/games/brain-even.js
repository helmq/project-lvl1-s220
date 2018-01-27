import startEngine from '..';
import * as helper from '../helper';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const generator = () => {
  const arg = helper.generateRandom(1, 100);
  return { question: `${arg}`, result: isEven(arg) ? 'yes' : 'no' };
};
export default () => startEngine({ description, generator });
