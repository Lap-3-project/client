import io from "socket.io-client";
const serverEndpoint = "https://universallychallenged.herokuapp.com/";
const socket = io(serverEndpoint);

export { socket };
