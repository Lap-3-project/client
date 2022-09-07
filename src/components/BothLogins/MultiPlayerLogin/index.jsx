import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./MultiPlayerLogin.css";

const MultiPlayerLogin = () => {
  /* state variables for: 'create room' inputs, form submitting, form validation */
  const [inputValues, setInputValues] = useState({
    username: "",
    room: "",
    playerNum: ""
  });
  const [submitForm, setSubmitForm] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleUsernameInput = (e) => {
    // updates username input
    setInputValues({ ...inputValues, username: e.target.value });
  };

  const handleRoomInput = (e) => {
    // updates room input
    setInputValues({ ...inputValues, room: e.target.value });
  };

  const handlePlayerNumInput = (e) => {
    // updates player num input
    setInputValues({ ...inputValues, playerNum: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    // the following below helps validate form before submission
    setSubmitForm((prev) => {
      prev = true;
      return prev;
    });

    // ensures input values meet correct conditions for submission
    if (
      inputValues.username &&
      inputValues.room &&
      inputValues.playerNum &&
      parseInt(inputValues.playerNum) >= 2 &&
      parseInt(inputValues.playerNum) <= 5
    ) {
      setIsValid((prev) => {
        prev = true;
        return prev;
      });

      // slows move to next page to show username & spinner
      setTimeout(moveToNextPage, 800);

      // creates new user in mongodb
      createNewUser();
    }
  };

  function createNewUser() {
    const options = {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: inputValues.username
      })
    };

    fetch(`https://universallychallenged.herokuapp.com/users`, options)
      .then((res) => res.json())
      .then(() => {
        setInputValues((prev) => {
          console.log();
          return prev;
        });
      })
      .catch((err) => console.log("Something went wrong: ", err));
  }

  // move to next page
  function moveToNextPage() {
    navigate("/category");
  }

  return (
    <>
      {submitForm && isValid ? null : (
        <h1 id="multiPlayerLoginTitle">Create your room</h1>
      )}

      {submitForm && isValid ? null : (
        <form onSubmit={handleSubmitForm} id="multiPlayerFormContainer">
          <label htmlFor="username">Choose your Username</label>
          <input
            autoComplete="off"
            type="text"
            placeholder="Enter username"
            id="username"
            value={inputValues.username}
            onChange={handleUsernameInput}
          />
          {submitForm && !inputValues.username ? (
            <p style={{ color: "red" }}>Please enter a username</p>
          ) : null}
          <br />

          <label htmlFor="room">Choose your room name</label>
          <input
            autoComplete="off"
            type="text"
            placeholder="Enter room"
            id="room"
            value={inputValues.room}
            onChange={handleRoomInput}
          />
          {submitForm && !inputValues.room ? (
            <p style={{ color: "red" }}>Please enter a room name</p>
          ) : null}
          <br />

          <label htmlFor="numOfPlayers">How many players (2-5)?</label>
          <input
            min="2"
            autoComplete="off"
            type="number"
            placeholder="Enter number of players"
            id="numOfPlayers"
            value={inputValues.playerNum}
            onChange={handlePlayerNumInput}
          />
          {(submitForm && !inputValues.playerNum) ||
          (submitForm && inputValues.playerNum.includes(".")) ||
          (submitForm && parseInt(inputValues.playerNum) < 2) ||
          (submitForm && parseInt(inputValues.playerNum) > 5) ? (
            <p style={{ color: "red" }}>
              Please select a number between 2 and 5
            </p>
          ) : null}
          <br />

          {submitForm && isValid ? null : (
            <button>
              Submit <i className="fa-solid fa-paper-plane"></i>
            </button>
          )}
        </form>
      )}

      {submitForm && isValid ? (
        <>
          <p>Hello {inputValues.username}</p>
          <i className="fa-solid fa-spinner fa-spin-pulse"></i>
        </>
      ) : null}
    </>
  );
};

export default MultiPlayerLogin;

// for both multiplayer and single: render components based on previous choice
