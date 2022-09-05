import React from "react";
import { useContext } from "react";
import DataContext from "../../context/dataContext";

const Question = () => {
  const { questions } = useContext(DataContext);
  return <div>{questions}</div>;
};

export default Question;
