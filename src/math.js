const isEven = num => num % 2 === 0;

const generateRandom = (min, max) => Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));

const sum = (a, b) => a + b;

const deduct = (a, b) => a - b;

const multiply = (a, b) => a * b;

export { isEven, generateRandom, sum, deduct, multiply };
