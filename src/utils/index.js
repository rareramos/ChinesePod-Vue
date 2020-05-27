
export function stopAllAudios() {
  const sounds = document.getElementById('app').getElementsByTagName('audio');
  for(let i = 0; i < sounds.length; i++) {
    sounds[i].pause();
    sounds[i].parentNode.removeChild(sounds[i]);
  }
}

export function runAudioEffect(audio) {
  document.body.click();
  stopAllAudios();
  const a = new Audio(audio);
  document.getElementById('app').appendChild(a);
  a.play();
}
