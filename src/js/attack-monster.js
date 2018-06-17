import {lossPlayerHP} from './lossHP.js';
export default function attackMonster() {
    $('.field').append(`
        <img class='mud attack' id='mud' src='./style/img/mud.png'>
    `)
    sound();
    setTimeout(attack, 500);
    setTimeout(lossPlayerHP, 2800);
}

function sound() {
    let audio = new Audio();
    audio.src = './style/audio/audio-monster.mp3';
    audio.autoplay = true; 
  }

  function attack() {
    let start = Date.now(); 
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
      
      $('#mud').css('right',`${(170 + timePassed / 2) + 'px'}`);
      $('#mud').css('width',`${(50 + timePassed / 30) + 'px'}`);
      $('#mud').css('height',`${(50 + timePassed / 30) + 'px'}`);

      if (timePassed > 1650) clearInterval(timer);

    }, 20);
};