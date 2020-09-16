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

const submit = document.querySelector('.note-btn');
const noteTitle = document.querySelector('#note-title');
const noteContent = document.querySelector('#note-content');
const noteContainer = document.querySelector('.note-container');

submit.addEventListener('click', (e) => {{
    // let div = document.createElement("DIV");
    // div.textContent = "test";
    // noteContainer.appendChild(div);
    let note = document.createElement("DIV");
    let noteContain = document.createElement("DIV");
    let noteTit = document.createElement("H2");
    let noteCon = document.createElement("P");
    note.classList.add('note');
    noteContain.classList.add('note-content');
    noteTit.textContent = noteTitle.value;
    noteCon.textContent = noteContent.value;
    noteContain.appendChild(noteTit);
    noteContain.appendChild(noteCon);
    note.appendChild(noteContain);
    noteContainer.appendChild(note);
    }
});


///////From chatapp, use this to get you started//////

// const messageInput = document.querySelector('input.addMessage');
// const submitButton = document.querySelector('button.submit');
// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => { //hit enter to submit form. Submit only works on form element
//     e.preventDefault();
//     if(messageInput.value === "") { //if you hit enter or send button it will submit form
//         alert("Don't forget your message");
//     } else {
//     let message = document.createElement("DIV");  //create a div element
//     message.classList.add('message'); // add class message to above div
//     let text = document.createElement('P'); //create a p element
//     let span = document.createElement('SPAN'); //create a span element
//     text.textContent = messageInput.value; //add the vlue of the input to the p tag
//     span.textContent = `from ${randomName(nameArray)}`; //add a random pres name to the span. Function randomName above creates this
//     text.appendChild(span); //append the span to the p element
//     message.appendChild(text); //append the p element to the div
//     messageInput.value = ''; // return the input to a empty state
//     messageBlock.appendChild(message); //append the message div to the message-display area
//     }
//   });


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



