function titlePlayer(name: String): HTMLDivElement {
  const title = document.createElement('div');
  title.classList.add('title');
  title.innerHTML = /* html */`
    <span>Player: ${name}</span>
    <div class="title__ready">Ready</div>
  `;

  return title;
}

function titleWrraper(title1: HTMLDivElement, title2: HTMLDivElement): HTMLDivElement {
  const wrraper = document.createElement('div');
  wrraper.classList.add('title__wrraper');
  wrraper.append(title1, title2);
  return wrraper;
}

export { titleWrraper, titlePlayer };
