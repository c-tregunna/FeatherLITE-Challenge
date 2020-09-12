//----------------------
// Menu icon animation
//----------------------

const menu = document.querySelector('.contain');
const list = document.querySelector('.list');

const topBar = document.querySelector('.top');
const midBar = document.querySelector('.mid');
const botBar = document.querySelector('.bot');

const overlay = document.getElementById('myNav');

menu.addEventListener('click', e => {
    if (e.target.className === 'contain') {
        topBar.classList.toggle('changeTop');
        midBar.classList.toggle('changeMid');
        botBar.classList.toggle('changeBot');
        overlay.classList.toggle('overlay__full');
        overlay.style.transition = "all .8s";
    }
});

//----------------------
// End Menu icon animation
//----------------------



