import readlineSync from 'readline-sync';

export const welcome = description =>
  `\nWelcome to the Brain Games!\n${description}\n`;

export const readName = () => readlineSync.question('May I have your name ? ');

export const greet = name => `Hello, ${name}!\n`;

export const question = q => `Question: ${q}`;

export const readAnswer = () => readlineSync.question('Your answer: ');

export const failure = (name, answer, correct) =>
  `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}\n`;

export const congratulations = name => `Congratulations, ${name}!\n`;
