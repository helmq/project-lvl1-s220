import startEngine from '..';
import * as helper from '../helper';

const description = 'What number is missing in this progression?';

const progressionSize = 10;

const generateProgression = () => {
  const first = helper.generateRandom(0, 10);
  const step = helper.generateRandom(2, 10);
  const iter = (acc) => {
    if (acc.length === progressionSize) {
      return acc;
    }
    return iter([...acc, first + (acc.length * step)]);
  };
  return iter([]);
};

const generator = () => {
  const progression = generateProgression();
  const skippedIndex = helper.generateRandom(0, progressionSize - 1);
  const skipped = progression[skippedIndex];
  progression[skippedIndex] = '..';
  return { question: progression.join(' '), result: `${skipped}` };
};

export default () => startEngine({ description, generator });
