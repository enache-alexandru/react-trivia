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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(allQuestions[0]);
  const [answers, setAnswers] = useState([]);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
      const question = allQuestions[currentQuestionIndex];
      setCurrentQuestion(question);
      setAnswers(reorderAnswers(question));
  }, [currentQuestionIndex]);

  const selectAnswer =  answer => {
    
    setSelectedAnswer(answer)

    if(answer === currentQuestion.correctAnswer) {
      setCountCorrectAnswers(countCorrectAnswers + 1);
    }
    
    setTimeout(() => {
      let newQuestionIndex = currentQuestionIndex + 1;

      if (newQuestionIndex === allQuestions.length) {
          setIsDone(true);
      } else {
          setCurrentQuestionIndex(newQuestionIndex);
          // setIsSubmitting(false);
          setSelectedAnswer(null);
      }
  }, 2750);
    
  }

  return (
    <div>
      {!isDone ? 
      <div className="question-box">
        <h3>{currentQuestion.question}</h3>
        <ul className="answers-list">
          {answers.map((a, i) => {
            let isSubmitting = selectedAnswer != null;
            let isCorrectClassName = a === currentQuestion.correctAnswer && isSubmitting ? "correct" : "incorrect";
            let isSelectedClassName = a === selectedAnswer ? "selected" : "not-selected";
            return(<li
              key={i}
              onClick={() => selectAnswer(a)}
              className={isSubmitting ? isCorrectClassName + " " + isSelectedClassName : ""}
            >
                {a}
            </li>)}
          )}
        </ul>
        <div>Question {currentQuestionIndex + 1} from {allQuestions.length}. Correct {countCorrectAnswers}</div>
      </div>
      : 
      <div>is Done, {countCorrectAnswers} from {allQuestions.length} correct </div>}
    </div>
  );
}

export default QuestionItem;