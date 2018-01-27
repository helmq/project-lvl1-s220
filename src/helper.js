export const generateRandom = (min, max) => {
  if (min === max) return min;
  return Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));
};

export const upFirstLetter = str => str[0].toUpperCase() + str.slice(1);
