import startEngine from '..';
import * as helper from '../helper';

const description = 'What number is missing in this progression?';

const size = 10;

const generateProgression = () => {
  const first = helper.generateRandom(0, 10);
  const progression = [first];
  const step = helper.generateRandom(2, 10);
  while (progression.length < size) {
    progression.push(first + (step * progression.length));
  }
  return progression;
};

const generator = () => {
  const skippedIndex = helper.generateRandom(0, size - 1);
  const progression = generateProgression();
  const skipped = progression[skippedIndex];
  progression[skippedIndex] = '..';
  return { question: progression.join(' '), result: `${skipped}` };
};

export default () => startEngine({ description, generator });
