import React from "react";
import classes from "./AnswersList.module.css";
import AnswersItem from "./AnswersItem/AnswersItem";

const AnswersList = (props) => (
  <ul className={classes.AnswersList}>
    {props.answers.map((answer, index) => (
      <AnswersItem key={index} answer={answer} />
    ))}
  </ul>
);
export default AnswersList;
