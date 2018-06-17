import {lossMonsterHP, lossPlayerHP} from './lossHP.js'

export function castPlusSpell() {
    $('.field').append(`<img src='./style/img/plus.png' alt='hero' class='plus attack'> `);
    sound(1);
    setTimeout(attack(), 1000);
    setTimeout(function() {
        lossMonsterHP()
    }, 2100);

    function attack() {
        let start = Date.now(); 
        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            $('.plus').css('left',`${(130 + timePassed / 2) + 'px'}`);
            if (timePassed > 1700) clearInterval(timer);
        }, 20);
    };
}

  export function castEnglishSpell() {
    $('.field').append(`<img src='./style/img/english-spell.png' alt='spell' class='dictionary attack'> `);
    sound(2);
    setTimeout(attack(), 1000);
    setTimeout(function() {
        lossMonsterHP()
    }, 2100);

    function attack() {
        let start = Date.now(); 
        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            $('.dictionary').css('left',`${(130 + timePassed / 2) + 'px'}`);
            $('.dictionary').css('bottom',`${(190 + timePassed / 4) + 'px'}`);
            if (timePassed > 850) {
                clearInterval(timer);
                start = Date.now();
                timer = setInterval(function() {
                    timePassed = Date.now() - start;
                    $('.dictionary').css('left',`${(555 + timePassed / 2) + 'px'}`);
                    $('.dictionary').css('bottom',`${(402 - timePassed / 4) + 'px'}`);
                    if (timePassed > 850) {
                        clearInterval(timer);
            }
        }, 20);
    };
});
}
}

function sound(x) {
    let audio = new Audio();
    if (x == 1) {
        audio.src = `./style/audio/audio-plus.mp3`;
    } else if (x == 2) {
        audio.src = `./style/audio/audio-english.mp3`;
    }
    audio.autoplay = true; 
  }
