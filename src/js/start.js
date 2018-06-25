import {user} from './login.js';
import {createMonster} from './createMonster.js';
import {monsterName} from './createMonster.js';
import {attackPlayer} from './attack-player.js';
import {score} from './win.js';
let img;

export function start() {
    $('.health-bars').remove();
    $('.field').remove(); 

    $("body").append(`
        <section class='health-bars'>
            <div class='max-health'>
                <div class='health player-health'>100/100</div>
            </div>
            <div class='max-health'>
                <div class='health monster-health'>${100+score*10}/${100+score*10}</div>
            </div>
            <p class='name'>${user.firstName} ${user.lastName}</p>
            <p class='name'>${monsterName()}</p>
        </section>
        <div class = 'field'> 
        </div>`
    );
    $('.field').append(`<img src='./style/img/mage.jpg.png' alt='hero' class='mage'> `);
    
    createMonster();

    $('.battlefield').html(`
        <div class='fight'>Fight!</div>
    `);
    $('.fight').click(function() {
        attackPlayer(); 
    });
}