
const toDoList = document.getElementById('list-container');


const programmStart = () => {
    document.getElementById("submit").addEventListener("click", createListElement);

    //nur für die hardcodierten listenelemente
    const deleteButtons = document.getElementsByClassName("delete-button");
    const buttonArr = Array.from(deleteButtons);  // Umwandlung zum Array um Iteration zu ermöglichen
    buttonArr.forEach(button => button.addEventListener('click', removeListElement));
}

const createListElement = (event) => {
    const newLi = document.createElement("li");
    newLi.innerText = document.forms[0].elements["input123"].value;     //warum keine id='' -getElementById
    toDoList.appendChild(newLi);

    newLi.appendChild(createButton('checked-button', 'fa-check'));
    newLi.appendChild(createButton('edit-button', 'fa-pencil'));
    let newButton = createButton('delete-button', 'fa-trash-can'); //wegen onclick, wenn editListElement existiert -> auslagern
    newButton.onclick = removeListElement;
    newLi.appendChild(newButton);

    event.preventDefault(); // Wichtig damit das Formular nicht abgeschickt wird
};

// TODO -- buggy: sometimes removes also <ul>
const removeListElement = (event) => {
    //console.log(event.path);        //gives back an array of elements from current (icon:0) up to root
    //Alternativen  (jenachdem was syntactisch schöner ist^^)
    //event.path[2].remove();
    event.target.parentNode.parentNode.remove();    //target: icon, parent: button, parentparent: li
};

// TODO -- add event assignment
let createButton = (className, icon) => {
    let newButton = document.createElement("button");
    newButton.classList = `${className}`;
    newButton.innerHTML = `<i class="fa-solid ${icon}"></i>`;
    // newButton.onclick = classList === 'delete-button' ? removeListElement : editElement;
    return newButton;
};


window.addEventListener("load", programmStart);