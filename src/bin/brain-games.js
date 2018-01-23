#!/usr/bin/env node
import { askName, greet } from '..';
import upFirstLetter from '../string';

console.log('Welcome to the Brain Games!\n');
const name = askName();
console.log(greet(upFirstLetter(name)));
