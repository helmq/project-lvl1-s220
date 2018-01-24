import readlineSync from 'readline-sync';

export const welcomeMessage = description =>
  `\nWelcome to the Brain Games!\n${description}`;

export const readName = () => readlineSync.question('May I have your name ? ');

export const greetMessage = name => `Hello, ${name}!\n`;

export const questionMessage = q => `Question: ${q}`;

export const readAnswer = () => readlineSync.question('Your answer: ');

export const failureMessage = (name, answer, correct) =>
  `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}\n`;

export const congratulationsMessage = name => `Congratulations, ${name}!\n`;

export const isEven = num => num % 2 === 0;

export const generateRandom = (min, max) =>
  Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));

export const sum = (a, b) => a + b;

export const deduct = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const upFirstLetter = str => str[0].toUpperCase() + str.slice(1);