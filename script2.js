function playSound(type) {
  let sound;
  switch(type) {
    case 'click':
      sound = new Audio('click.mp3');
      break;
    case 'beep':
      sound = new Audio('beep.mp3');
      break;
    case 'pop':
      sound = new Audio('pop.mp3');
      break;
  }
  if (sound) {
    sound.volume = 0.5;
    sound.play();
  }
}
