#!/usr/bin/env node
import * as message from '../cli/message';
import upFirstLetter from '../string';

console.log(message.welcome(''));
const name = upFirstLetter(message.readName());
console.log(message.greet(name));
