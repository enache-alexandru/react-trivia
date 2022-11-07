import './assets/scss/App.scss';
import React, { Component } from "react";
import { getAllQuestions } from './services/dummyQuestions'
import { getQuestion } from './services/dummyQuestions'
//import { useDeferredValue } from 'react';


function Answer(props) {
  return (
    <button
      className={`answer answer-${props.value} btn`}
      onClick={() => props.onAnswer()}
      >
        {props.children}
    </button>
  );
}

function RenderAnswers(props) {
  const answerArr = props.answers;

  const renderAnswerButtons = answerArr.map((item) => {
    return(
      <Answer
        key={item.index}
        onAnswer={() => props.onAnswer(item.index)}>
        {item.answer}
      </Answer>
    );
  })

  return(
    <div className="answers">
      {renderAnswerButtons}
    </div>
  )
}


class App extends Component {
  state = {
    currentAnswer: 0,
    answers: [],
    correctAnswers: getAllQuestions().map(item => {return item.correctAnswer}),
    questionIndex: 0,
    totalQuestions: getAllQuestions().length,
    currentQuestion: getQuestion(0),
    gameOver: false,
  }


  handleAnswer(response) {
    this.setState({
      currentAnswer: response,
    });
  }


  handleNext() {
    const nextQuestionIndex = this.state.questionIndex + 1;

    if(nextQuestionIndex <= this.state.totalQuestions) {
      this.setState({
        currentAnswer: 0,
        answers: [...this.state.answers, this.state.currentAnswer],
        questionIndex: nextQuestionIndex,
        currentQuestion: getQuestion(nextQuestionIndex)
      });
    }
  }

  handleResults() {
    let answers = [...this.state.answers, this.state.currentAnswer];
    this.setState({
      gameOver: true,
      answers: answers,
    });
    
    CalculateResults(this.state.correctAnswers, answers)
  }

  render() {
    return (
      <div className="trivia-app">
        <div> Question {this.state.questionIndex + 1} from {this.state.totalQuestions}</div>
        <h2>{this.state.currentQuestion.question}</h2>
        <RenderAnswers answers={this.state.currentQuestion.answers} onAnswer={(i) => this.handleAnswer(i)}/>
        <NextQuestion
          onClick={() => this.handleNext()}
          onShowResults={() => this.handleResults()}
          totalQuestions={this.state.totalQuestions}
          currQuestion={this.state.questionIndex}
          gameOver={this.state.gameOver}
        />
        <FinalAnswer currentSelection={this.state.currentAnswer} currentAnswers={this.state.currentQuestion.answers}/>
        <pre>
          {this.state.answers}
        </pre>
      </div>
    );
  }
}


function NextQuestion(props) {
  
  const currentQuestion = props.currQuestion + 1;

  if(currentQuestion < props.totalQuestions) {
    return(
      <div className="next-question">
        <button onClick={()=>props.onClick()} className=" btn btn-primary">Next Question</button>
      </div>
    )
  } else {
    return(
      <div className="next-question">
        <button onClick={()=>props.onShowResults()} disabled={props.gameOver ? true : false} className="btn btn-primary">Show Results</button>
      </div>
    )
  }
}

function FinalAnswer(props) {
  if(props.currentSelection < 1) return;

  const currSel = props.currentSelection - 1;
  const selectedAnswer = props.currentAnswers[currSel].answer

  return(
    <div>
      Your final answer is: {selectedAnswer}
    </div>
  );
}

function CalculateResults(correctAnswers, answers) {
  console.log("Calculate Results", correctAnswers, "/",answers);
  let displayResults = "";

  for(let i = 0; i < correctAnswers.length; i++) {
    if(correctAnswers[i] === answers[i]) {
      displayResults += "Question "+ (i+1) +" corect ";
    } else {
      displayResults += "Question "+ (i+1) +" incorect ";
    }
  }

  console.log(displayResults)

  return(
    <div>
      {displayResults}
    </div>
  )
}

export default App;
