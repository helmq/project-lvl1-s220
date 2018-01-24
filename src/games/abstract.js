const getResult = (f, ...args) => f(...args);

const gameIter = (generateQuestion, askQuestion, getAnswer, parseAnswer, numberOfQuestions = 3) => {
  let count = 0;
  while (count < numberOfQuestions) {
    const question = generateQuestion();
    askQuestion(question.string);
    const answer = getAnswer();
    if (!parseAnswer(answer, question.result)) {
      return { result: question.result, answer };
    }
    count += 1;
  }
  return true;
};

export { getResult, gameIter };
