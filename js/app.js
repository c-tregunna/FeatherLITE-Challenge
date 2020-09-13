//----------------------
// Menu icon animation
//----------------------

// const contain = document.querySelector('.contain');
const menu = document.querySelector('.menu');

const topBar = document.querySelector('.top');
const midBar = document.querySelector('.mid');
const botBar = document.querySelector('.bot');

const overlay = document.getElementById('myNav');

menu.addEventListener('click', e => {
    if (e.target.className === 'menu') {
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



