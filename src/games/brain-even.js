import { getResult, gameIter } from './engine';
import * as helper from '../helper';

const parseResult = (result) => {
  const parse = { false: 'no', true: 'yes' };
  return parse[result];
};

const generateQuestion = () => {
  const number = helper.generateRandom(1, 100);
  return {
    string: number.toString(),
    result: parseResult(getResult(helper.isEven, number)),
  };
};

const parseAnswer = (answer, result) => {
  const correct = new Set(['yes', 'no']);
  return correct.has(answer) && answer === result;
};

const start = (askQuestion, getAnswer, onTrueAnswer) =>
  gameIter(generateQuestion, parseAnswer, askQuestion, getAnswer, onTrueAnswer);

const cliStart = () => {
  const askQuestion = question => console.log(helper.questionMessage(question));
  const onTrueAnswer = () => console.log('Correct!');
  console.log(helper.welcomeMessage('Answer "yes" if number even otherwise answer "no".\n'));
  const name = helper.upFirstLetter(helper.readName());
  console.log(helper.greetMessage(name));
  const result = start(askQuestion, helper.readAnswer, onTrueAnswer);
  if (result === true) {
    console.log(helper.congratulationsMessage(name));
  } else {
    console.log(helper.failureMessage(name, result.answer, result.result));
  }
};

export default cliStart;
