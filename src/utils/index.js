
export function stopAllAudios() {
  const sounds = document.getElementById('audio-trash').getElementsByTagName('audio');
  for(let i = 0; i < sounds.length; i++) {
    sounds[i].pause();
    sounds[i].parentNode.removeChild(sounds[i]);
  }
}

export function runAudioEffect(audio) {
  document.querySelector('div').click();
  stopAllAudios();
  const a = new Audio(audio);
  document.getElementById('audio-trash').appendChild(a);
  a.play();
}
