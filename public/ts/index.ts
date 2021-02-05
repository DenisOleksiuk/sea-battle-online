import '../scss/style.scss';
import { io } from 'socket.io-client';

// eslint-disable-next-line no-undef
const socket = io();

function component(): Node {
  const element = document.createElement('div');
  element.classList.add('some');
  element.innerHTML = ['Hello', 'Webpack'].join();

  return element;
}

document.body.appendChild(component());

export default socket;
