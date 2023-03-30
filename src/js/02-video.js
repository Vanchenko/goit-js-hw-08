import { throttle } from 'lodash';

const iframe = document.querySelector('#vimeo-player');
const vmp = new Vimeo.Player(iframe);

vmp.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

vmp.on('timeupdate', throttle((data) => {
    localStorage.setItem("videoplayer-current-time", String(data.seconds));
}, 1000));




