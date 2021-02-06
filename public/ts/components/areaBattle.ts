/* eslint-disable no-continue */
function createArea(): void {
  const root = document.querySelector('#root');
  const battlshipArea = document.createElement('div');
  battlshipArea.classList.add('battleship__grid-one');

  const ASCCI = 97;
  let id: number = 0;

  for (let i = 0; i < 11; i += 1) {
    const divI = document.createElement('div');
    divI.classList.add('board');

    if (i !== 0) {
      divI.id = `${id}`;
      divI.textContent = `${i}`;
      battlshipArea.append(divI);
    }
    divI.id = `${id}`;
    battlshipArea.append(divI);

    for (let j = 0; j < 10; j += 1) {
      id += 1;
      const divJ = document.createElement('div');
      divJ.classList.add('board');

      if (i === 0) {
        divJ.id = `${id}`;
        divJ.textContent = String.fromCharCode(ASCCI + j);
        battlshipArea.append(divJ);
      } else {
        divJ.id = `${id}`;
        battlshipArea.append(divJ);
      }
    }

    id += 1;
  }
  root?.append(battlshipArea);
}

export default createArea;
