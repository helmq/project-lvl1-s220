import readlineSync from 'readline-sync';

const welcome = description =>
  `\nWelcome to the Brain Games!\n${description}\n`;

const readName = () => readlineSync.question('May I have your name ? ');

const greet = name => `Hello, ${name}!\n`;

const question = q => `Question: ${q}`;

const readAnswer = () => readlineSync.question('Your answer: ');

const failure = (name, answer, correct) =>
  `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}\n`;

const getAnswer = (f, ...args) => f(...args);

const congratulations = name => `Congratulations, ${name}!\n`;

export { welcome, readName, greet, question, readAnswer, failure, getAnswer, congratulations };
