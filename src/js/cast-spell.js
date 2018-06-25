import {lossMonsterHP} from './lossHP.js'

export function castPlusSpell() {
    $('.field').append(`<img src='./style/img/plus.png' alt='hero' class='plus attack'> `);
    sound(1).then(function() {
        return attackPlus();
    }).then(function() {
        return lossHP();
    });
}

  export function castEnglishSpell() {
    $('.field').append(`<img src='./style/img/english-spell.png' alt='spell' class='dictionary attack'> `);
    sound(2).then(function() {
        return attackEnglish();
    }).then(function() {
        return lossHP();
    });
}

function sound(x) {
    return new Promise(function(resolve){
        setTimeout(function() {
            let audio = new Audio();
            if (x == 1) {
                audio.src = `./style/audio/audio-plus.mp3`;
            } else if (x == 2) {
                audio.src = `./style/audio/audio-english.mp3`;
            }
            audio.autoplay = true; 
            resolve();
        }, 500);
    });
}

function attackPlus() {
    return new Promise(function(resolve){
        setTimeout(function() {
            let start = Date.now(); 
            let timer = setInterval(function() {
                let timePassed = Date.now() - start;
                $('.plus').css('left',`${(130 + timePassed / 2) + 'px'}`);
                if (timePassed > 1700) clearInterval(timer);
            }, 20);
            resolve();
        }, 10);
    });
}

function attackEnglish() {
    return new Promise(function(resolve){
        setTimeout(function() {
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
            resolve();
        }, 100);
    });
}

function lossHP() {
    return new Promise(function(resolve){
        setTimeout(function() {
                lossMonsterHP();
            resolve();
        }, 2100);
    });
}
