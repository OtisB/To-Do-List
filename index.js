
//const toDoList = document.getElementById('list-container');
const toDoList = document.querySelector('#list-container form');


const programmStart = () => {
    document.getElementById("submit").addEventListener("click", createListElement);
}

const createListElement = (event) => {
    const newLi = document.createElement("li");
    toDoList.appendChild(newLi);

    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('name', 'task');
    newInput.classList = ('task-entry');
    newInput.setAttribute('value', document.getElementById('new-task').value);
    newInput.setAttribute('readonly', 'readonly');

    newLi.appendChild(newInput);


    const ckb = document.createElement("input");
    ckb.setAttribute("type", "checkbox");
    // ckb.setAttribute("checked", "checked");
    let dv = document.createElement("div");
    dv.className = "fieldborder";
    dv.appendChild(ckb);
    newLi.appendChild(dv);

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
    event.preventDefault(); // wie form submit am besten verhindern? Woher kommt der Submit überhaupt?
    //console.log(listElement.innerHTML);

    if (listElement.childNodes[2].firstChild.className === "fa-solid fa-floppy-disk") {
        listElement.childNodes[0].setAttribute("readonly", "readonly");
        listElement.childNodes[2].firstChild.className = "fa-solid fa-pencil";
    } else {
        listElement.childNodes[0].removeAttribute("readonly");
        listElement.childNodes[2].firstChild.className = "fa-solid fa-floppy-disk";
    }
};

const checkListElement = (event, listElement) => {
};

let createButton = (className, icon) => {
    const newButton = document.createElement('button');
    newButton.classList = `${className}`;
    newButton.innerHTML = `<i class="fa-solid ${icon}"></i>`;
    return newButton;
};


window.addEventListener("load", programmStart);