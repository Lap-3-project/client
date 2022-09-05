import { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [subject, setSubject] = useState([]);

  //Fetching quiz data:
  useEffect(() => {
    fetchData();
  }, []);

  // replace with carolines code
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
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export default DataContext;
