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

const start = (askQuestion, getAnswer) =>
  gameIter(generateQuestion, askQuestion, getAnswer, parseAnswer);

const cliStart = () => {
  console.log(helper.welcomeMessage('Answer "yes" if number even otherwise answer "no".\n'));
  const name = helper.upFirstLetter(helper.readName());
  console.log(helper.greetMessage(name));
  const askQuestion = (question) => {
    console.log(helper.questionMessage(question));
  };
  const result = start(askQuestion, helper.readAnswer);
  if (result === true) {
    console.log(helper.congratulationsMessage(name));
  } else {
    console.log(helper.failureMessage(name, result.answer, result.result));
  }

};
export default cliStart;
