import { welcome, readName, greet, question, readAnswer, failure, getAnswer, congratulations } from './abstract';
import { generateRandom, isEven } from '../math';
import upFirstLetter from '../string';

const correctAnswers = new Set(['yes', 'no']);

const generateCorrectAnswer = (answer) => {
  const answerVariants = { true: 'yes', false: 'no' };
  return answerVariants[answer];
};

const start = (numberOfQuestions) => {
  console.log(welcome('Answer "yes" if number even otherwise answer "no".'));
  const name = upFirstLetter(readName());
  console.log(greet(name));
  let count = 0;
  while (count < numberOfQuestions) {
    const num = generateRandom(1, 100);
    console.log(question(num));
    const answer = readAnswer();
    const correctAnswer = generateCorrectAnswer(getAnswer(isEven, num));
    if (!correctAnswers.has(answer) || correctAnswer !== answer) {
      console.log(failure(name, answer, correctAnswer));
      return;
    }
    console.log('Correct!');
    count += 1;
  }
  console.log(congratulations(name));
};

export default start;
