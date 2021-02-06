class Overlay {
  static render() {
    const root = document.querySelector('#root');
    const video = document.createElement('video');
    const overlay = document.createElement('div');
    const overlayImg = document.createElement('div');
    overlay.classList.add('overlay');
    overlayImg.classList.add('overlay__img');

    video.src = './assets/video/Pexels.mp4';
    video.muted = true;
    video.loop = true;
    video.autoplay = true;

    root?.prepend(video, overlay, overlayImg);
  }
}

export default Overlay;
