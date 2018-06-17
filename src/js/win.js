import {start} from './start.js';
let score = 0;
export function win() {
    score++;
    $('.battlefield').addClass('shadow');
    $('.battlefield').html(`
        <section class='win-wrapper'>
            <p>Congratilations!</p>
            <p>Monster killed: ${score}.</p>
            <div class='fight' style='margin-top: 100px'>Next fight!</div>
        </section>
    `)  

    $('.fight').click(function() {
        $('.health-bars').remove();
        $('.field').remove();
        start();
    });
}
export {score};