
const toDoList = document.getElementById('list-container');


const programmStart = () => {
    document.getElementById("submit").addEventListener("click", createListElement);
}

const createListElement = (event) => { 
    const newLi = document.createElement("li");
    newLi.innerText = document.forms[0].elements["input123"].value;
    toDoList.appendChild(newLi);

    let newButton = document.createElement("button");
    newButton.innerText = "Erledigt";
    newLi.appendChild(newButton);
    newButton = document.createElement("button");
    newButton.innerText = "Bearbeiten";
    newLi.appendChild(newButton);
    newButton = document.createElement("button");
    newButton.innerText = "Löschen";
    newLi.appendChild(newButton);



    event.preventDefault(); // Wichtig damit das Formular nicht abgeschickt wird
};


window.addEventListener("load", programmStart);