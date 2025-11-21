import { io as socketIOClient } from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:5000'; // Your backend URL

// Create and export the socket instance
export const io = socketIOClient(SOCKET_SERVER_URL);
