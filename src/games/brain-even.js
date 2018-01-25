import { cliOutput, generateQuestion } from './engine';
import * as helper from '../helper';

const generateString = arg => arg.toString();

const generateArgs = () => helper.generateRandom(1, 100);

const parser = (arg) => {
  const vars = {
    false: 'no',
    no: 'no',
    true: 'yes',
    yes: 'yes',
  };
  return vars[arg];
};

const isEven = arg => parser(helper.isEven(arg));

const start = () => {
  const generator = generateQuestion({ isEven }, generateString, generateArgs);
  return cliOutput(generator, parser, 'Answer "yes" if number even otherwise answer "no".');
};
export default start;
