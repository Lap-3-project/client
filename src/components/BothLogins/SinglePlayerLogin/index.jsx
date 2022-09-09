import React, { useState, useContext } from "react";
import DataContext from "../../../context/dataContext";
import { useNavigate } from "react-router-dom";

import "./SinglePlayerLogin.css";

const SinglePlayerLogin = () => {
  const { handleUsernameInput, inputValue } = useContext(DataContext);
  const navigate = useNavigate();

  /* state variables for: username input, form submitting, form validation */
  // const [inputValue, setInputValue] = useState({ username: "" });
  const [submitForm, setSubmitForm] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // const handleUsernameInput = (e) => {
  // // updates user input
  //   setInputValue({ ...inputValue, username: e.target.value });
  // };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // the following below helps validate form before submission
    setSubmitForm((prev) => {
      prev = true;
      return prev;
    });

    if (inputValue.username) {
      setIsValid((prev) => {
        prev = true;
        return prev;
      });

      // slows move to next page to show username & spinner
      setTimeout(moveToNextPage, 0);

      // creates new user in mongodb
      createNewUser();
    }
  };

  function createNewUser() {
    const options = {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: inputValue.username,
      }),
    };

    fetch(`https://universallychallenged.herokuapp.com/users`, options)
      .then((res) => res.json())
      .catch((err) => console.log("Something went wrong: ", err));
  }

  // move to next page
  function moveToNextPage() {
    navigate("/category");
  }
  // console.log("handleUsernameInput==> ", handleUsernameInput)
  // console.log("inputValue==> ", inputValue)
  // console.log("inputValue.username==> ", inputValue.username)

  return (
    <>
      {submitForm && isValid ? null : (
        <h1 className="header-single">Choose your nickname</h1>
      )}

      {submitForm && isValid ? null : (
        <>
          <form
            onSubmit={handleSubmitForm}
            id="singlePlayerFormContainer"
            role="form"
          >
            <input
              autoFocus
              role="input"
              name="username"
              id="username"
              autoComplete="off"
              type="text"
              placeholder="Enter nickname"
              value={inputValue.username}
              onChange={handleUsernameInput}
            />
            {submitForm && !inputValue.username ? (
              <p role="paragraph">Please enter a username</p>
            ) : null}
            <br />

            {submitForm && isValid ? null : (
              <button role="submit" className="btn-single">
                Submit
              </button>
            )}
          </form>
        </>
      )}

      {submitForm && isValid ? (
        <>
          <p id="singleWelcome">Welcome {inputValue.username}</p>
          <i className="fa-solid fa-spinner fa-spin-pulse"></i>
        </>
      ) : null}
    </>
  );
};

export default SinglePlayerLogin;

// for both multiplayer and single: render components based on previous choice
