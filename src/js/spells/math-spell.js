import {castPlusSpell} from '../cast-spell.js';
import attackMonster from '../attack-monster.js';
let signArr = ['+','-','*','/'];
let sign = signArr[getRandomInRange(0,3)];
let num1 = 0;
let num2 = 0;
let result = 0;

export default function mathSpell() {
    createOperation()
    createMathWindow()

    $('#submit').click( function() {
        if (result == $('#player-result').val()) {
            $('.modal-window').css('background', 'green');
            setTimeout(function()  {
                $('.modal-window').remove();
                $('.battlefield').removeClass('shadow');
                castPlusSpell();
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

function createOperation() {
    switch(sign) {
        case '+':  
            num1 = getRandomInRange(1, 99);
            num2 = getRandomInRange(1, 99);
            result = num1+num2;
            break;
        case '-':  
             num1 = getRandomInRange(1, 99);
             num2 = getRandomInRange(1, 99);
             result = num1-num2;
            break;
        case '*':
            num1 = getRandomInRange(1, 99);
            num2 = getRandomInRange(2, 9);
            result = num1*num2;
            break;
        case '/':
            result = getRandomInRange(1, 99);
            num2 = getRandomInRange(2, 9);
            num1 = num2*result;
      }
}

function createMathWindow() {
    $('.battlefield').html(`
    <div class='modal-window'>
        <p> ${num1} ${sign} ${num2} = <input type="text" size="2" id='player-result' value=''> ?</p>
        <input type="button" id='submit' value="Ответить">
    </div>
`);
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}