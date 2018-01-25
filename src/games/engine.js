import * as helper from '../helper';

const parse = (answer, result, parser) => parser(result) === parser(answer);

const generateQuestion = (expressions, generateString, generateArgs) => () => {
  const objKeys = Object.keys(expressions);
  const expression = expressions[
    objKeys[helper.generateRandom(0, objKeys.length - 1)]
  ];
  const args = generateArgs(expression);
  const string = generateString(args, expression);
  const result = expression(args);
  return { string, result };
};

const gameIter =
  (generator, isTrue, askQuestion, getAnswer, onTrueAnswer, numberOfQuestions = 3) => {
    let count = 0;
    while (count < numberOfQuestions) {
      const question = generator();
      askQuestion(question.string);
      const answer = getAnswer();
      if (!parse(answer, question.result, isTrue)) {
        return { result: question.result, answer };
      }
      onTrueAnswer();
      count += 1;
    }
    return true;
  };

const cliOutput = (question, isTrue, description) => {
  const askQuestion = q => console.log(helper.questionMessage(q));
  const onTrueAnswer = () => console.log('Correct!');
  console.log(helper.welcomeMessage(description));
  const name = helper.upFirstLetter(helper.readName());
  console.log(helper.greetMessage(name));
  const result = gameIter(question, isTrue, askQuestion, helper.readAnswer, onTrueAnswer);
  if (result === true) {
    console.log(helper.congratulationsMessage(name));
  } else {
    console.log(helper.failureMessage(name, result.answer, result.result));
  }
};

export { gameIter, cliOutput, generateQuestion };
