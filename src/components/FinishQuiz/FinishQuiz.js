import React from "react";
import classes from "./FinishQuiz.module.css";

const FinishQuiz = (props) => {
  return (
    <div className={classes.FinishQuiz}>
      <ul>
        <li>
          <strong>1.</strong>
          <i className={"fa fa-times" + classes.error}></i>
        </li>
        <li>
          <strong>2.</strong>
          <i className={"fa fa-check" + classes.success}></i>
        </li>
        <li>1</li>
        <li>1</li>
      </ul>
      <p>Правильно 3 из 5</p>
      <div>
        <button>Try Again!</button>
      </div>
    </div>
  );
};
export default FinishQuiz;
