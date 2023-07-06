document.querySelector('form').addEventListener('submit', HandleSubmitForm);
document.querySelector('ul').addEventListener('click', HandleClickDeleteOrCheck)

function HandleSubmitForm(event) {
    event.preventDefault();

    let input = document.querySelector('input');
    if (input.value != '') 
        AddToDo(input.value);

    input.value = '' // clears added text
}

function HandleClickDeleteOrCheck(event) {
    if (event.target.name == "check") 
        CheckToDo(event);

    if (event.target.name == "delete")
        DeleteToDo(event);
}

function AddToDo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class="to-do-list">${todo}</span>
        <button name="check"><img src=/images/check.png class="check"></button>
        <button name="delete"><img src=/images/trash.png class="delete"></button>
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