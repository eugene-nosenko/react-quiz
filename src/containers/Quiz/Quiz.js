import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    quiz: [],
  };
  render() {
    return (
      <div className={classes.Quiz}>
        <h1>Quiz</h1>
        <div>
          <ActiveQuiz />
        </div>
      </div>
    );
  }
}
export default Quiz;
