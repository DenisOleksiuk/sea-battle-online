function createMenu(): HTMLDivElement {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.innerHTML = /* html */ `
    <div id="single"><p>SINGLE PLAYER</p></div>
    <div id="multiplayer"><p>MULTIPLAYER</p></div>
    <div id="options"><p>OPTIONS</p></div>
  `;

  return menu;
}

export default createMenu;
