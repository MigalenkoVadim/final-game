import attackMonster from './attack-monster.js';
import {attackPlayer} from './attack-player.js';
import {lose} from './lose.js';
import {win} from './win.js';

export function lossMonsterHP() {
    let monsterHealth;
    if ($('.monster-health').html().length == 7) {
        monsterHealth = +$('.monster-health').html().substr(0, 3) - ( Math.floor(Math.random() * 21) + 30);
    } else if ($('.monster-health').html().length == 6) {
        monsterHealth = +$('.monster-health').html().substr(0, 2) - ( Math.floor(Math.random() * 21) + 30);
    } else {
        monsterHealth = +$('.monster-health').html().substr(0, 1) - ( Math.floor(Math.random() * 21) + 30);
    }
    if (monsterHealth < 0) {
        monsterHealth = 0;
    }
    $('.monster-health').html(
        `${monsterHealth}/100`
    )
    $('.monster-health').css('width', `${monsterHealth*3}`); 
    $('.attack').remove();
    if (monsterHealth == 0) {
        win()
    } else {
        setTimeout(attackMonster, 1500);
    }
} 

export function lossPlayerHP() {
    let playerHealth;
    if ($('.player-health').html().length == 7) {
        playerHealth = +$('.player-health').html().substr(0, 3) - ( Math.floor(Math.random() * 21) + 15);
    } else if ($('.player-health').html().length == 6) {
        playerHealth = +$('.player-health').html().substr(0, 2) - ( Math.floor(Math.random() * 21) + 15);
    } else {
        playerHealth = +$('.player-health').html().substr(0, 1) - ( Math.floor(Math.random() * 21) + 15);
    }
    if (playerHealth < 0) {
        playerHealth = 0;
    }
    $('.player-health').html(
        `${playerHealth}/100`
    )
    $('.player-health').css('width', `${playerHealth*3}`);
    $('.attack').remove();
    if (playerHealth == 0) {
        lose()
    } else {
        setTimeout(attackPlayer, 2000);
    }
} 