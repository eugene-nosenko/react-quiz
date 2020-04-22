import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishQuiz from "../../components/FinishQuiz/FinishQuiz";

class Quiz extends Component {
  state = {
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' || 'error' }
    quiz: [
      {
        id: 1,
        question: "Какого цвета небо?",
        rightAnswerId: 4,
        answers: [
          {
            text: "Черный 1",
            id: 1,
          },
          {
            text: "Белый 2",
            id: 2,
          },
          {
            text: "Красный 3",
            id: 3,
          },
          {
            text: "Синий 4",
            id: 4,
          },
        ],
      },
      {
        id: 2,
        question: "В каком году основали Львов?",
        rightAnswerId: 2,
        answers: [
          {
            text: "1324",
            id: 1,
          },
          {
            text: "1256",
            id: 2,
          },
          {
            text: "825",
            id: 3,
          },
          {
            text: "985",
            id: 4,
          },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerID) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "Success") {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerID) {
      this.setState({
        answerState: { [answerID]: "success" },
      });
      const timeout = setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({ isFinished: true });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
        answerState: { [answerID]: "error" },
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {this.state.isFinished ? (
            <FinishQuiz />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}
export default Quiz;
