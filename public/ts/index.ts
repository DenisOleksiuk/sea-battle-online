import '../scss/style.scss';
import { io } from 'socket.io-client';
import Overlay from './components/Overlay';
import createArea from './components/areaBattle';
import { titleWrraper, titlePlayer } from './components/titlePlayers';
import menu from './components/menu';

const socket = io();
const root = document.querySelector('#root');
const container: HTMLDivElement = document.createElement('div');
const wrraper: HTMLDivElement = document.createElement('div');
container.classList.add('container');
wrraper.classList.add('wrraper');

wrraper.append(createArea(), createArea());
container.append(titleWrraper(titlePlayer('Vasy'), titlePlayer('Dima')), wrraper);
root?.append(container, menu());

// eslint-disable-next-line no-undef

Overlay.render();

export default socket;
