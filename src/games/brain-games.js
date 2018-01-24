import { greetMessage, welcomeMessage, readName, upFirstLetter } from '../helper';

const start = () => {
  console.log(welcomeMessage(''));
  const name = upFirstLetter(readName());
  console.log(greetMessage(name));
};

export default start;
