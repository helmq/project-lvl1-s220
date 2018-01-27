import * as helper from './helper';

const gameIter = (generator, output, numberOfQuestions = 3) => {
  if (numberOfQuestions === 0) {
    return true;
  }
  const { askQuestion, readAnswer, onTrueAnswer } = output;
  const { question, result } = generator();
  askQuestion(question);
  const answer = readAnswer();
  if (answer !== result) {
    return { result, answer };
  }
  onTrueAnswer();
  return gameIter(generator, output, numberOfQuestions - 1);
};

export default (game) => {
  const { description, generator } = game;
  const askQuestion = q => console.log(helper.questionMessage(q));
  const onTrueAnswer = () => console.log('Correct!');
  console.log(helper.welcomeMessage());
  if (description) {
    console.log(`${description}\n`);
  }
  const name = helper.upFirstLetter(helper.readName());
  console.log(helper.greetMessage(name));
  const result = gameIter(generator, { askQuestion, readAnswer: helper.readAnswer, onTrueAnswer });
  if (result === true) {
    console.log(helper.congratulationsMessage(name));
  } else {
    console.log(helper.failureMessage(name, result.answer, result.result));
  }
};

