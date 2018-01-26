import * as helper from './helper';

const gameIter =
  (generator, askQuestion, getAnswer, onTrueAnswer, numberOfQuestions = 3) => {
    let count = 0;
    while (count < numberOfQuestions) {
      const { question, result } = generator();
      askQuestion(question);
      const answer = getAnswer();
      if (answer !== result) {
        return { result, answer };
      }
      onTrueAnswer();
      count += 1;
    }
    return true;
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
  const result = gameIter(generator, askQuestion, helper.readAnswer, onTrueAnswer);
  if (result === true) {
    console.log(helper.congratulationsMessage(name));
  } else {
    console.log(helper.failureMessage(name, result.answer, result.result));
  }
};

