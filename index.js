
//const toDoList = document.getElementById('list-container');
const toDoList = document.querySelector('#list-container form');


const programmStart = () => {
    document.getElementById("submit").addEventListener("click", createListElement);
}

const createListElement = (event) => {
    const newLi = document.createElement("li");
    //newLi.innerText = document.forms[0].elements["input-new-task"].value;
    toDoList.appendChild(newLi);

    //TODO: create a helper function
    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('name', 'task');
    newInput.classList = ('task-entry');
    newInput.setAttribute('value', document.getElementById('new-task').value);
    newInput.setAttribute('readonly', 'readonly');
    //end of TODO

    newLi.appendChild(newInput);

    newLi.appendChild(createButton('checked-button', 'fa-check'));

    const editButton = createButton('edit-button', 'fa-pencil');
    editButton.addEventListener('click', () => { editListElement(event, newLi); });
    newLi.appendChild(editButton);

    const deleteButton = createButton('delete-button', 'fa-trash-can');
    deleteButton.addEventListener('click', () => { removeListElement(event, newLi); });
    newLi.appendChild(deleteButton);

    event.preventDefault();
};

const removeListElement = (event, listElement) => {
    listElement.remove();
};

const editListElement = (event, listElement) => {
    // log for innerHTML of listElement/newLi: TEXT<button class="checked-button"><i class="fa-solid fa-check"></i></button><button class="edit-button"><i class="fa-solid fa-pencil"></i></button><button class="delete-button"><i class="fa-solid fa-trash-can"></i></button>
    console.log(listElement.innerHTML);

    const stringButtonElements = '<button class="checked-button"><i class="fa-solid fa-check"></i></button><button class="edit-button"><i class="fa-solid fa-pencil"></i></button><button class="delete-button"><i class="fa-solid fa-trash-can"></i></button>';

    const stringText = "Finish Bootcamp!"

    listElement.innerHTML = `${stringText}${stringButtonElements}`;
};

let createButton = (className, icon) => {
    const newButton = document.createElement("button");
    newButton.classList = `${className}`;
    newButton.innerHTML = `<i class="fa-solid ${icon}"></i>`;
    return newButton;
};


window.addEventListener("load", programmStart);