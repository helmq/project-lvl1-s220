import startEngine from '..';
import * as helper from '../helper';

const description = 'Answer "yes" if number even otherwise answer "no".';

const generator = () => {
  const arg = helper.generateRandom(1, 100);
  return { question: `${arg}`, result: helper.isEven(arg) ? 'yes' : 'no' };
};
export default () => startEngine({ description, generator });
