import io from 'socket.io-client';
const CDN_PORT = 'localhost:7770/';

let socket ;
export default socket =io(CDN_PORT);