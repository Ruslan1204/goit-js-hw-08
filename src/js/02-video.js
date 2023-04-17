import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(onSeconds, 1000));

function onSeconds(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

const time = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(time).then(function (seconds) {});

