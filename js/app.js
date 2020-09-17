//----------------------
// Menu icon animation
//----------------------

// const contain = document.querySelector('.contain');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

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
        body.classList.toggle('overflow');
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
// End show create note modal
//----------------------

//----------------------
// Add note to page
//----------------------

//click the post note button
//create div note element
//populate with input values
//append it to the note container
//eeek!!

//Get date for note header
let date = new Date();
const days = ["Sun", "Mon", "Tue", "Weds", "Thur", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let dayName = days[new Date().getDay()];
let monthName = months[new Date().getMonth()];
console.log(dayName);
console.log(monthName);

let today = dayName +' '+ monthName +' '+ date.getDate() +' '+ date.getFullYear();

const submit = document.querySelector('.note-btn');
const noteTitle = document.querySelector('#note-title');
const noteContent = document.querySelector('#note-content');
const noteContainer = document.querySelector('.note-container');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if(noteContent.value === "") {
         alert("Don't forget to add all your details to your note");
    } else {
    let note = document.createElement("DIV"); //main note wrapper
    let noteContain = document.createElement("DIV"); //individual notes
    let noteHead = document.createElement("DIV"); //header of the note, including date, color dot
    let noteDot = document.createElement("DIV"); //note dot
    let noteDate = document.createElement("DIV"); //note date
    let noteTit = document.createElement("H2"); //note title from the note title input
    let noteCon = document.createElement("P"); //note content from the note content input
    noteHead.classList.add('note-header');
    noteDot.classList.add('dot');
    noteDot.style.backgroundColor = generateRandomColor();
    noteDate.classList.add('date');
    note.classList.add('note');
    noteContain.classList.add('note-content');
    noteDate.textContent = today;
    noteTit.textContent = noteTitle.value;
    noteCon.textContent = noteContent.value;
    noteContain.appendChild(noteTit);
    noteContain.appendChild(noteCon);
    noteHead.appendChild(noteDot);
    noteHead.appendChild(noteDate);
    note.appendChild(noteHead);
    note.appendChild(noteContain);
    noteContainer.appendChild(note);
    noteTitle.value = '';
    noteContent.value = '';
    modal.classList.toggle('show');
    }
});

//----------------------
// End Add note to page
//----------------------


//----------------------
// Create random color for dot on the page notes
//----------------------

function generateRandomColor()
{
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16); //167777215 amount of colors that exisit black to white
    return randomColor;
}

console.log(generateRandomColor());

dots.forEach((dot) => {
    dot.style.backgroundColor = generateRandomColor();
});

//----------------------
// End create random color for dot
//----------------------



