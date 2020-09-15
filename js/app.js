//----------------------
// Menu icon animation
//----------------------

// const contain = document.querySelector('.contain');
const menu = document.querySelector('.menu');

const topBar = document.querySelector('.top');
const midBar = document.querySelector('.mid');
const botBar = document.querySelector('.bot');

const overlay = document.getElementById('myNav');

let dots = document.querySelectorAll('.dot');

const modal = document.querySelector('.modal');
const createNote = document.querySelector('.create-note');
const modalClose = document.querySelector('.modal-content__close ');

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

//----------------------
// show create note modal
//----------------------

createNote.addEventListener('click', e => {
    modal.classList.toggle('show');
});

modalClose.addEventListener('click', e => {
    modal.classList.toggle('show');
});

//----------------------
// Create random color for dot on the page notes
//----------------------

function generateRandomColor()
{
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16); //167777215 amount of colors that exisit black to white
    return randomColor;
    //random color will be freshly served
}

console.log(generateRandomColor());

dots.forEach((dot) => {
    dot.style.backgroundColor = generateRandomColor() // -> #e1ac94
});

//----------------------
// End create random color for dot
//----------------------



