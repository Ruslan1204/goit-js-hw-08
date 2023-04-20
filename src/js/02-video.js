import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onSeconds, 1000));

const time = localStorage.getItem('videoplayer-current-time');

function onSeconds(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

if (time) {
  player.setCurrentTime(time);
}
