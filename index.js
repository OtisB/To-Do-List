
const toDoList = document.getElementById('list-container');


const programmStart = () => {
    document.getElementById("submit").addEventListener("click", createListElement);
    
    const deleteButtons = document.getElementsByClassName("delete-button");
    const buttonArr = Array.from(deleteButtons);  // Umwandlung zum Array um Iteration zu ermöglichen
    buttonArr.forEach(button => button.addEventListener('click', removeListElement));
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

const removeListElement = (event) => {
    console.log(event.path);        //gives back an array of elements from current (icon:0) up to root
    //Alternativen  (jenachdem was syntactisch schöner ist^^)
    //event.path[2].remove();
    event.target.parentNode.parentNode.remove();    //target: icon, parent: button, parentparent: li
};


window.addEventListener("load", programmStart);