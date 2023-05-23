import "../css/common.css";
import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const VIDEO_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const playStr = function (data) {
    const dataStr = JSON.stringify(data);
    localStorage.setItem(VIDEO_KEY, dataStr);
}

player.on('timeupdate', throttle(playStr, 1000),
 function playResult() {
     if (JSON.parse(localStorage.getItem(VIDEO_KEY)) === null) {
         return;
     }
     const timeSet = JSON.parse(localStorage.getItem(VIDEO_KEY))["seconds"];
     if (timeSet) {
         player
             .setCurrentTime(timeSet)
             .then(function (seconds) {})
             .catch(function (error) {
                 switch (error.name) {
                     case "Error":
                        break;
                 }  
             })
       }   
        
    });

    