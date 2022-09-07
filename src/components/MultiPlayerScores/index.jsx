import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MultiPlayerScores = () => {
  /* state variables for: username & score */
  const [allPlayers, setAllPlayers] = useState({});
  const navigate = useNavigate();

  const moveBackToCategory = () => {
    navigate("/category");
  };

  const moveBackToHome = () => {
    navigate("/");
  };

  function findWinner() {
    console.log("allPlayers: ", allPlayers);
    console.log("allPlayers.users: ", allPlayers.users);

    let winnerName;

    const maxScore = Math.max(
      ...allPlayers.users.map((singleObj) => {
        return singleObj.scores.animals;
      })
    );
    console.log("maxScore==> ", maxScore);

    for (let i = 0; i < allPlayers.users.length; i++) {
      let singleObj = allPlayers.users[i];
      if (maxScore === singleObj.scores.animals) {
        winnerName = singleObj.username;
      }
    }

    console.log("winnerName==> ", winnerName);
    return winnerName;

    // let winnerObj = allPlayers.users.reduce(function (prev, current) {
    //   if (+current.id > +prev.id) {
    //     return current;
    //   } else {
    //     return prev;
    //   }
    // });

    // return winnerObj;
  }

  function getAllPlayers() {
    useEffect(() => {
      fetch("https://universallychallenged.herokuapp.com/users") // "http://127.0.0.1:5173/waiting" or "https://universally-challenged.netlify.app/waiting"
        .then((response) => response.json())
        .then((data) => setAllPlayers(data));
    }, []);

    // useEffect(() => {
    //   async function fetchUsers() {
    //     const response = await fetch(
    //       "https://universallychallenged.herokuapp.com/users"
    //     );
    //     const json = await response.json();
    //     setAllPlayers((prev) => {
    //       prev = json;
    //       return prev;
    //     });
    //   }
    //   fetchUsers();
    // }, []);
  }

  getAllPlayers();

  return (
    <>
      <h1>Winner</h1>

      {/* works when cut out, browser refreshed, pasted back in, vs code saved 😩*/}
      <h3>{findWinner()}</h3>
      <i className="fa-solid fa-trophy"></i>

      <ul>
        {allPlayers.users?.map((oneUserObj) => {
          return (
            <li key={oneUserObj._id}>
              <span>{oneUserObj.username}</span>{" "}
              <span>{oneUserObj.scores.animals}/5</span>
            </li>
          );
        })}
      </ul>
      {/* works when cut out, browser refreshed, pasted back in, vs code saved 😩*/}

      <button onClick={moveBackToCategory}>Play again </button>

      <button onClick={moveBackToHome}>Return home</button>
    </>
  );
};

export default MultiPlayerScores;
