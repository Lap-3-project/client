import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./style.css";

// import { socket } from '../socket/index';

const Home = () => {
  // store if btn is single or multi

  // const [playerCount, setPlayerCount] = useState(0);
  // const [allUsers, setAllUsers] = useState([]);

  const handlePlayer = (e) => {
    e.preventDefault();
    setPlayer(e.target.value);
    console.log(e.target.value);
  };
  
  const navigate = useNavigate();
  const navigateToSinglePlayer = () => {
    navigate('/create-room')
  }
  const navigateToMultiPlayer = () => {
    navigate('/create-room')
  }

  //implementing socket 
  // useEffect(() => {
  //   socket.on("users", (users) => setPlayerCount(users));
  //   socket.on("new-user", (allUsers) => {
  //     setAllUsers(allUsers);
  //   })
  // }, []);

  return (
    <>
      <h1 className="neonText">Welcome To</h1>
      <a>
        <img
          src="https://blog.flamingtext.com/blog/2022/09/05/flamingtext_com_1662393421_527315134.png"
          border="0"
          alt="Universally Challenged Logo"
          title="Universally Challenged"
        />
      </a>

      <h2 className="neonText">Start Quiz</h2>

      <div className="homeButtons">

      <button className="btn" onClick={navigateToSinglePlayer}>Single Player</button>
      <button className="btn" onClick={navigateToMultiPlayer}>Multi Player</button>
{/*
        <button className="btn" value="single" onClick={handlePlayer}>
          Single Player
        </button>

        <button className="btn" value="multi" onClick={handlePlayer}>
          Multi Player
        </button>
*/}
      </div>
    </>
  );
};

export default Home;
