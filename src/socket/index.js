import io from "socket.io-client";
const serverEndpoint = "http://127.0.0.1:5173/";
const socket = io(serverEndpoint);

export { socket };
