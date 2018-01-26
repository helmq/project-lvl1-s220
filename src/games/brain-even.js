import startEngine from '..';
import * as helper from '../helper';

const description = 'Answer "yes" if number even otherwise answer "no".';

const parser = (arg) => {
  const vars = {
    false: 'no',
    true: 'yes',
  };
  return vars[arg];
};

const generator = () => {
  const arg = helper.generateRandom(1, 100);
  return { question: `${arg}`, result: `${parser(helper.isEven(arg))}` };
};
export default () => startEngine({ description, generator });
