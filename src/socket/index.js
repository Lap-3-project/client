import io from "socket.io-client";
const serverEndpoint = "http://localhost:8001/";
const socket = io(serverEndpoint);

export { socket };