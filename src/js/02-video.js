// 02-video.js
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const localKey = "videoplayer-current-time";
// const timeLocalStorage = localStorage.getItem(localKey) || 0;

const onPlay = function(data) {
    const currentTime = data.seconds;
    localStorage.setItem(localKey, currentTime);
}

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(localKey) || 0).catch(function(error) {
    switch (error.name) {
        case 'RangeError': break;
        default: break;
    }
});

