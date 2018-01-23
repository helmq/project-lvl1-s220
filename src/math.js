const checkEven = num => num % 2 === 0;

const getRandom = (min, max) => Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));

export { checkEven, getRandom };
