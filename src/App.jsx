import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { io } from "socket.io-client"

import * as Pages from "./pages";
import { DataProvider } from "./context/dataContext";

function App() {
  const connect = () => {
    const socket = io("http://localhost:8001")
  }

  useEffect(() => {
    connect();
  }, []);



  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Pages.Home />}></Route>
        <Route path="createRoom" element={<Pages.CreateRoom />}></Route>
        <Route path="/category" element={<Pages.Subjects />}></Route>
        <Route path="/waiting" element={<Pages.Waiting />}></Route>
        <Route path="/quiz" element={<Pages.Quiz />}></Route>
        <Route path="/score-single" element={<Pages.ScoreSingle />}></Route>
        <Route path="scoreMulti" element={<Pages.ScoreMulti />}></Route>
        <Route path="*" element={<Pages.NotFound />}></Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
