
const toDoList = document.getElementById('listContainer');


const programmStart = () => {

    console.log(21);

    const addbutton = document.getElementById("submit");

    addbutton.addEventListener("click", createListElement);
}

const createListElement = () => { 
    console.log(1);

    const newLi = document.createElement("li");
    newLi.innerText = document.forms[0].elements["123"].value;
    toDoList.appendChild(newLi);
};


window.addEventListener("load", programmStart);