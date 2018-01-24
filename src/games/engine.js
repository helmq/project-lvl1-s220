const getResult = (f, ...args) => f(...args);

const gameIter =
  (generateQuestion, parseAnswer, askQuestion, getAnswer, onTrueAnswer, numberOfQuestions = 3) => {
    let count = 0;
    while (count < numberOfQuestions) {
      const question = generateQuestion();
      askQuestion(question.string);
      const answer = getAnswer();
      if (!parseAnswer(answer, question.result)) {
        return { result: question.result, answer };
      }
      onTrueAnswer();
      count += 1;
    }
    return true;
  };

export { getResult, gameIter };
