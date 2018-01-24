#!/usr/bin/env node
import { startBrainCalc as start } from '..';
import * as message from '../cli/message';
import upFirstLetter from '../string';

console.log(message.welcome('What is the result of the expression?'));
const name = upFirstLetter(message.readName());
console.log(message.greet(name));
const askQuestion = (question) => {
  console.log(message.question(question));
};
const result = start(askQuestion, message.readAnswer);
if (result === true) {
  console.log(message.congratulations());
} else {
  console.log(message.failure(name, result.answer, result.result));
}
