import { readName, greet } from './abstract';
import upFirstLetter from '../string';

const start = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readName();
  console.log(greet(upFirstLetter(name)));
};

export default start;
