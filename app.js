// Event Listeners
document.querySelector('form').addEventListener('submit', HandleSubmitForm);
// document.querySelector('ul').addEventListener('click', HandleClickDeleteOrCheck);
document.querySelector('a').addEventListener('click', ClearAll);
document.getElementById('check').addEventListener('click', HandleCheck);
document.getElementById('trash').addEventListener('click', HandleDelete);

// Event Handlers
function HandleSubmitForm(e) {
    e.preventDefault();

    let input = document.querySelector('input');
    if (input.value != '') 
        AddToDo(input.value);

    input.value = '' // clears added text
}

// function HandleCheck {
    
// }

function HandleDelete() {
    let trash = document.getElementById('trash');
    trash.parentNode.remove();
}






// function HandleClickDeleteOrCheck(e) {
//     if (e.target.name == "check") 
//         CheckToDo(e);

//     if (e.target.name == "delete")
//         DeleteToDo(e);

// }


// Helpers
function AddToDo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class="to-do-list">${todo}</span>
        <button name="check" id="check"><img src=/images/check.png class="check"></button>
        <button name="delete" id="delete"><img src=/images/trash.png class="delete"></button>
    `

    ul.appendChild(li);
}

// function CheckToDo(e) {
//     let item = e.target.parentNode;
//     if (item.style.textDecoration == 'line-through') {
//         item.style.textDecoration = none;
//     }

//     else {
//         item.style.textDecoration = 'line-through';
//     }
// }

// function DeleteToDo(e) {
//     let item = e.target.parentNode;
//     item.remove();

// }

function ClearAll() {
    document.querySelector('ul').innerHTML = '';
}