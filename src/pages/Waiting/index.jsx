import React, { useState, useEffect } from "react";
import { socket } from "../../socket";
import "./Waiting.css";


const Waiting = () => {

  const [ready, setReady] = useState(false);
  // const [subject, setSubject] = useState("") 
  // const [difficulty, setDifficulty] = useState("")
  // const [numberOfQs, setNo] = useState("")
  const room = useSelector((state) => state.user.room)

  useEffect(() => {
    socket.emit('get-questions', room, (res) => {

    })
    socket.on('game-start', val =>  setReady(val))
    
}, [ready]);

  return (
    <>
      <div className="waiting-body">
        <h1 className="header-waiting">Waiting Room </h1>
        <div className="container-pacman">
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
        </div>
      </div>
    </>
  );
};

export default Waiting;
