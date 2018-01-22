import readlineSync from 'readline-sync';

const upFirstLetter = str => str[0].toUpperCase() + str.slice(1);

const greet = () => {
    const name = upFirstLetter(readlineSync.question('May I have your name ? '));
    return `Hello, ${name}!`;
};

export default greet;