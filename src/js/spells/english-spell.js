import obj from '../../data/dictionary.json';
import attackMonster from '../attack-monster.js';
import {castEnglishSpell} from '../cast-spell.js';
let word;
export default function englishSpell() {
    word = Object.keys(obj)[Math.floor(Math.random() * 10)];
    $('.battlefield').html(`
        <div class='modal-window'>
            <p class='translate'>Переведите слово <i><b>${word}</b></i> на русский.</p>
            <input type="text" size="5" id='player-answer' value=''>
            <input type="button" id='submit' value="Ответить">
        </div>
    `);

    $('#submit').click( function() {
        if (obj[word].indexOf($('#player-answer').val()) !== -1) {
            $('.modal-window').css('background', 'green');
            setTimeout(function()  {
                $('.modal-window').remove();
                $('.battlefield').removeClass('shadow');
                castEnglishSpell();
            }, 1000);
        } else {
            $('.modal-window').css('background', 'red');
            setTimeout(function()  {
                $('.modal-window').remove();
                $('.battlefield').removeClass('shadow');
            }, 1000);
            setTimeout(attackMonster, 2000);
        }
    });
}