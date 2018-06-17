import mathSpell from './spells/math-spell.js'
import englishSpell from './spells/english-spell.js'
export function callModalWindow() {
    $('.fight').remove();
    $('.battlefield').addClass('shadow');

    $('.battlefield').html(`
        <table class='modal-table'>
            <tr><td id='math'>Арифметическое заклинание</td></tr>
            <tr><td id='english'>Английское заклинание</td></tr>
        </table>
    `);

    $('#math').click( function (){
        mathSpell()
    });

    $('#english').click( function (){
        englishSpell()
    });
}
