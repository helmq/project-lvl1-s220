import { welcome, readName, greet, question, readAnswer, failure, getAnswer, congratulations } from './abstract';
import { sum, deduct, multiply, generateRandom } from '../math';
import upFirstLetter from '../string';

const generateArgs = (expression) => {
  const args = {
    sum: [generateRandom(1, 100), generateRandom(1, 100)],
    deduct: [generateRandom(1, 100), generateRandom(1, 100)],
    multiply: [generateRandom(1, 100), generateRandom(1, 10)],
  };
  return args[expression.name];
};

const generateQuestion = (expression, args) => {
  const [first, second] = args;
  const operations = { sum: '+', deduct: '-', multiply: '*' };
  return `${first} ${operations[expression.name]} ${second}`;
};

const start = (numberOfQuestions) => {
  console.log(welcome('What is the result of the expression?'));
  const name = upFirstLetter(readName());
  console.log(greet(name));
  const expressions = [sum, deduct, multiply];
  let count = 0;
  while (count < numberOfQuestions) {
    const expression = expressions[generateRandom(0, expressions.length - 1)];
    const args = generateArgs(expression);
    console.log(question(generateQuestion(expression, args)));
    const answer = readAnswer();
    const parsedAnswer = parseInt(answer, 10);
    if (Number.isNaN(parsedAnswer) || getAnswer(expression, ...args) !== parsedAnswer) {
      console.log(failure(name, answer, expression(...args)));
      return;
    }
    console.log('Correct!');
    count += 1;
  }
  console.log(congratulations(name));
};

export default start;
