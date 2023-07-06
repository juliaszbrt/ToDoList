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
        <span>${todo}</span>
        <button name="check">done</button>
        <button name="delete">delete</button>
    `

    ul.appendChild(li);
}

// function CheckToDo(e) {
//     let item = e.target.parentNode;
//     if ()
// }

// function DeleteToDo(del) {

// }