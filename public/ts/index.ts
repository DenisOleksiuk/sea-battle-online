import '../scss/style.scss';
import { io } from 'socket.io-client';
import Overlay from './components/Overlay';
import createArea from './components/areaBattle';

createArea();

// eslint-disable-next-line no-undef
const socket = io();

Overlay.render();

export default socket;
