
const toDoList = document.getElementById('listContainer');


const programmStart = () => {

    console.log(21);

    const addbutton = document.getElementById("submit");

    addbutton.addEventListener("click", createListElement);

    const deleteButtons = document.getElementsByClassName("delete-button");
    const buttonArr = Array.from(deleteButtons);  // Umwandlung zum Array um Iteration zu ermöglichen
    buttonArr.forEach(button => button.addEventListener('click', removeListElement));
}

const createListElement = () => {
    console.log(1);

    const newLi = document.createElement("li");
    newLi.innerText = document.forms[0].elements["123"].value;
    toDoList.appendChild(newLi);
};

const removeListElement = (event) => {
    console.log(event.path);        //gives back an array of elements from current (icon:0) up to root
    //Alternativen  (jenachdem was syntactisch schöner ist^^)
    //event.path[2].remove();
    event.target.parentNode.parentNode.remove();    //target: icon, parent: button, parentparent: li
};


window.addEventListener("load", programmStart);