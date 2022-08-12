
const toDoList = document.getElementById('list-container');


const programmStart = () => {
    document.getElementById("submit").addEventListener("click", createListElement);
}

const createListElement = (event) => {
    const newLi = document.createElement("li");
    newLi.innerText = document.forms[0].elements["input123"].value;     //warum keine id='' -getElementById?
    toDoList.appendChild(newLi);

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
    console.log(listElement.innerHTML);
};

let createButton = (className, icon) => {
    const newButton = document.createElement("button");
    newButton.classList = `${className}`;
    newButton.innerHTML = `<i class="fa-solid ${icon}"></i>`;
    return newButton;
};


window.addEventListener("load", programmStart);