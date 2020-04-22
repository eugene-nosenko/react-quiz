import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    quiz: [
      {
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
      {},
    ],
  };

  onAnswerClickHandler = (answerID) => {
    console.log("Answer Id:", answerID);
  };
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}
export default Quiz;
