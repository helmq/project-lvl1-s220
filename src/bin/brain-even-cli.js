#!/usr/bin/env node
import { startBrainEven as start } from '..';
import * as message from '../cli/message';
import upFirstLetter from '../string';

console.log(message.welcome('Answer "yes" if number even otherwise answer "no".\n'));
const name = upFirstLetter(message.readName());
console.log(message.greet(name));
const askQuestion = (question) => {
  console.log(message.question(question));
};
const result = start(askQuestion, message.readAnswer);
if (result === true) {
  console.log(message.congratulations(name));
} else {
  console.log(message.failure(name, result.answer, result.result));
}
