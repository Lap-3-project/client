import React, { useContext } from "react";
import { MultiPlayerLogin, SinglePlayerLogin } from "../../components";
//💥💥💥
import io from "socket.io-client";

import DataContext from "../../context/dataContext";

const CreateRoom = () => {
  const { playerMode } = useContext(DataContext);
  // Socket 💥
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  // "local host for now until deployment"
  const url = "http://localhost:8001";
  const socket = io(url);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("pong", () => {
      setLastPong(new Date().toISOString());
    });

    // Cleanup*
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  const sendPing = () => {
    socket.emit("ping");
  };

  return (
    <>
      {playerMode === "single" ? <SinglePlayerLogin /> : <MultiPlayerLogin />}
    </>
  );
};

export default CreateRoom;

// ✅
