import React from "react";
import classes from "./ActiveQuiz.module.css";

const ActiveQuiz = (props) => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>1.</strong>&nbsp; Как дела?
      </span>
      <small>4 из 12</small>
    </p>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
);

export default ActiveQuiz;
