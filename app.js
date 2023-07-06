document.querySelector('form').addEventListener('submit', HandleSubmitForm);

function HandleSubmitForm(event) {
    event.preventDefault();

    let input = document.querySelector('input');
    if (input.value != '') 
        AddToDo(input.value);

    input.value = ';' // clears added text
}

function AddToDo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    
}