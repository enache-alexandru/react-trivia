import React, { useState, useEffect } from "react";


const reorderAnswers = question => {
  const answers = [question.correctAnswer, ...question.incorrectAnswers];

  for (let index = 0; index < answers.length; index++) {
      const j = Math.floor(Math.random() * index);
      const tmp = answers[index];
      answers[index] = answers[j];
      answers[j] = tmp;
  }

  return answers;
};


function QuestionItem ({ allQuestions }) {
  const [isLoaded, setApiLoaded] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(allQuestions[0]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if(!allQuestions.length <= 0) {
      const question = allQuestions[currentQuestionIndex];
      setCurrentQuestion(question);
      setAnswers(reorderAnswers(question));
      setApiLoaded(true)
    }

}, [allQuestions]);

  return (
    <div>
       {isLoaded ? 
        <div>
          <h3>{currentQuestion.question}</h3>
          <ul>
            {console.log("answers", answers)}
            {answers.map(item => {
              <li>{item}</li>
            })}
          </ul>
        </div>
        : <div>loading...</div>}
    </div>
  );
}

export default QuestionItem;