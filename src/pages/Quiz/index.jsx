import React, { useContext, useEffect, useState } from "react";
import {
  Question,
  Subject,
  AnswerForm,
  QuestionNumber,
} from "../../components";
import DataContext from "../../context/dataContext";

const Quiz = () => {
  const { questions } = useContext(DataContext);
  //Fetching quiz data:
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${amount_of_questions}&difficulty=${question_difficulty}&category=${question_category}`
      );
      const data = await response.data;
      setQuestions(data.results);
      return data.results;
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Subject />
      <Question />
      <AnswerForm />
      <QuestionNumber />
    </>
  );
};

export default Quiz;
