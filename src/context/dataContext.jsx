import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [subject, setSubject] = useState(9);
  const [number, setNumber] = useState("5");
  const [difficulty, setDifficulty] = useState("easy");
  const [questionData, setQuestionData] = useState([]);
  const [inputValue, setInputValue] = useState({ username: "" });
  const [playerMode, setPlayerMode] = useState("");

  const navigate = useNavigate();

  const handleChangeSubject = (e) => {
    e.preventDefault();
    setSubject(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleChangeDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    async function getQuiz(subject, number, difficulty) {
      try {
        const result = await axios.get(
          `https://opentdb.com/api.php?amount=${number}&category=${subject}&difficulty=${difficulty}&type=multiple`
        );
        console.log(result.data);
        setQuestionData(result.data);
      } catch (err) {
        console.log(err);
      }
    }
    getQuiz(subject, number, difficulty);
    navigate("/quiz");
  };

  const handleUsernameInput = (e) => {
    console.log("dataContext==> ", { username: e.target.value });
    setInputValue({ ...inputValue, username: e.target.value });
  };

  const handlePlayer = (e) => {
    setPlayerMode(prev => {
      prev = e.target.value;
      return prev;
    });
    // console.log("playerMode (dataContext)==> ", playerMode);
    navigate('/createRoom')
  };

  return (
    <DataContext.Provider
      value={{
        handleChangeSubject,
        handleChangeNumber,
        handleChangeDifficulty,
        handleSubmit,
        handleUsernameInput,
        handlePlayer,
        number,
        inputValue,
        questionData,
        playerMode,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
