
const toDoList = document.getElementById('list-container');


const programmStart = () => {
    document.getElementById("submit").addEventListener("click", createListElement);
}

const createListElement = (event) => {
    const newLi = document.createElement("li");
    newLi.innerText = document.forms[0].elements["input123"].value;     //warum keine id='' -getElementById?
    toDoList.appendChild(newLi);

    newLi.appendChild(createButton('checked-button', 'fa-check'));
    newLi.appendChild(createButton('edit-button', 'fa-pencil'));

    const newButton = createButton('delete-button', 'fa-trash-can'); //wegen onclick, wenn editListElement existiert -> auslagern
    newButton.addEventListener('click', () => { removeListElement(event, newLi); });

    newLi.appendChild(newButton);

    event.preventDefault();
};

const removeListElement = (event, listElement) => {
    listElement.remove();
};

// TODO -- add event assignment
let createButton = (className, icon) => {
    const newButton = document.createElement("button");
    newButton.classList = `${className}`;
    newButton.innerHTML = `<i class="fa-solid ${icon}"></i>`;
    // newButton.onclick = classList === 'delete-button' ? removeListElement : editElement;
    return newButton;
};


window.addEventListener("load", programmStart);