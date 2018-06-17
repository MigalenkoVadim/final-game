export function createMonster() {
    $('.field').append(`<img src='./style/img/weapon${getRandom(3)}.png' alt='hero' class='monster-weapon'> `);
    $('.field').append(`<img src='./style/img/body${getRandom(3)}.png' alt='hero' class='monster-body'> `);
    $('.field').append(`<img src='./style/img/head${getRandom(3)}.png' alt='hero' class='monster-head'> `);
}

const monsterName1 = ['Мерзкий','Жуткий','Вонючий','Жалкий','Огромный','Розовый'];
const monsterName2 = ['Гнолл','Орк','Бард','Приятель','Тролль','Василиск'];
const monsterName3 = ['Петька','Васька','Святозар','Архимонд','Алеша','Горыныч'];

export function monsterName() {

    let monsterName = `${monsterName1[getRandom(6)]} ${monsterName2[getRandom(6)]} ${monsterName3[getRandom(6)]}`

    return monsterName;
}

function getRandom(x) {
    return Math.floor(Math.random() * x);
}


