import {score} from './win.js';
import {user} from './login.js';
import {start} from './start.js';
import {login} from './login.js'
let records = [];

if (localStorage.getItem('records') !== null) {
    records = JSON.parse(localStorage.getItem('records'));
}

export function lose() {    
        createRecordsArray();
        $('.battlefield').addClass('shadow');
        $('.battlefield').html(`<section class='records-wrapper'>
            <h1>You lose.</h1>
            <div class='records'>
                <h2> Records: </h2>
                <ol>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ol>
            </div>
        </section>
        <div class='start new-start' style='margin: -100px auto'>New Game!</div>
        <div class='start login' style='margin: 130px auto'>New Login!</div>`);

        for (let i = 1; i <= records.length; i++) {
            $(`.records li:nth-child(${i})`).html(JSON.parse(localStorage.getItem('records'))[`${i-1}`])
            };
        
        $('.new-start').click(start);
        $('.login').click(function(){
            $('.health-bars').remove();
            $('.field').remove();
            login();
        });
}

function createRecordsArray() {
    let strScore = score + " " + "monsters" + " - " + user.lastName + " " + user.firstName + " (" + user.email + ").";
    if (records.length == 0) {
        records.push(strScore);
    } else if (records.length < 5) {
        let arrLength = records.length
        for (let i = 0; i <= arrLength; i++) {
            if (parseFloat(records[i]) < parseFloat(strScore)) {
                let int = records[i];
                records[i] = strScore;
                strScore = int;
            }
            if (records[i] == undefined && strScore !== undefined) {
                records[i] = strScore;
            }
        }
    } else {
        for (let i = 0; i <= 5; i++) {
            if (parseFloat(records[i]) < parseFloat(strScore)) {
                let int = records[i];
                records[i] = strScore;
                strScore = int;
            }
        }
    }
    localStorage.setItem('records', JSON.stringify(records));
}