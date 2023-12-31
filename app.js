// Event Listeners
document.querySelector('form').addEventListener('submit', HandleSubmitForm);
document.querySelector('ul').addEventListener('click', HandleClickDeleteOrCheck);
document.querySelector('a').addEventListener('click', ClearAll);
document.getElementById('button1').addEventListener('click', handleOption1);
document.getElementById('button2').addEventListener('click', handleOption2);
document.getElementById('button3').addEventListener('click', handleOption3);
// document.getElementById('check').addEventListener('click', handleCheck);
// document.getElementById('trash').addEventListener('click', handleDelete);

// Event Handlers
function HandleSubmitForm(e) {
    e.preventDefault();

    let input = document.getElementById('input');
    if (input.value != '') 
        AddToDo(input.value);
        document.getElementById('clear').style.visibility = 'visible';

    input.value = '' // clears added text
}

function HandleClickDeleteOrCheck(e) {
    if (e.target.name == "check")
        CheckToDo(e);

    if (e.target.name == "delete")
        DeleteToDo(e);
}

// Helpers
function AddToDo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class="to-do-list">${todo}</span>
        <button name="check" id="check" class="check"><i class="fas fa-check" style="color: #6D5240;"></i></button>
        <button name="delete" id="delete" class="delete"><i class="fas fa-regular fa-xmark" style="color: #6D5240;"></i></i></button>
    `

    ul.appendChild(li);
}

function CheckToDo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through') {
        item.style.textDecoration = none;
    }

    else {
        item.style.textDecoration = 'line-through';
    }
}

function DeleteToDo(e) {
    let item = e.target.parentNode;
    item.remove();

}

function ClearAll() {
    document.querySelector('ul').innerHTML = '';
    document.getElementById('clear').style.visibility = 'hidden';
}

function handleOption1() {
    const body = document.querySelector('body');
    const btn1 = document.getElementById('button1');
    const btn2 = document.getElementById('button2');
    const btn3 = document.getElementById('button3');
    if (btn1.style.borderWidth != '3px') {
        btn1.style.borderWidth = '3px';
        btn2.style.borderWidth = '1.5px';
        btn3.style.borderWidth = '1.5px';

        body.style.background = 'linear-gradient(323deg, rgba(255,207,126,1) 0%, rgba(255,139,162,1) 100%)';
    }
}

function handleOption2() {
    const body = document.querySelector('body');
    const btn1 = document.getElementById('button1');
    const btn2 = document.getElementById('button2');
    const btn3 = document.getElementById('button3');
    if (btn2.style.borderWidth != '3px') {
        btn2.style.borderWidth = '3px';
        btn1.style.borderWidth = '1.5px';
        btn3.style.borderWidth = '1.5px';

        body.style.background = 'linear-gradient(323deg, rgba(133,187,212,1) 0%, rgba(103,70,209,1) 100%)';
    }
}

function handleOption3() {
    const body = document.querySelector('body');
    const btn1 = document.getElementById('button1');
    const btn2 = document.getElementById('button2');
    const btn3 = document.getElementById('button3');
    if (btn3.style.borderWidth != '3px') {
        btn3.style.borderWidth = '3px';
        btn1.style.borderWidth = '1.5px';
        btn2.style.borderWidth = '1.5px';

        body.style.background = 'linear-gradient(323deg, rgba(255,195,79,1) 0%, rgba(146,198,112,1) 83%, rgba(124,199,119,1) 100%)';
    }
}