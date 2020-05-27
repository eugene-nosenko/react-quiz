import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from "./actionTypes";
import axios from "axios";

export function createQuizQuestion(item) {
  return {
    type: CREATE_QUIZ_QUESTION,
    item,
  };
}

export function resetQuizCreation() {
  return {
    type: RESET_QUIZ_CREATION,
  };
}

export function finishCreateQuiz() {
  return async (dispatch, getState) => {
    await axios.post(
      `${process.env.REACT_APP_FIREBASE_DATABASE}quizes.json`,
      getState().create.quiz
    );
    dispatch(resetQuizCreation());
  };
}
