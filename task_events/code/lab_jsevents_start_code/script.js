const toDoForm = document.querySelector("#todo-form");
const deleteButton = document.querySelector("#delete");
const showDateButton = document.querySelector("#show-date");
const toDoList = document.querySelector("#list");



toDoForm.addEventListener("submit", (event) => {
    const newToDo = document.querySelector("#new-todo");

    event.preventDefault();
    console.log("button clicked");
    
    const newItem = document.createElement("li");

    const deleteItemButton = document.createElement("button");
    deleteItemButton.innerText = "Delete";

    newItem.innerText = newToDo.value;

    newItem.appendChild(deleteItemButton);
    toDoList.appendChild(newItem);

    deleteItemButton.addEventListener("click", () => {
        toDoList.removeChild(newItem);

    });

});

showDateButton.addEventListener("click", () => {
    const currentDate = new Date().toLocaleDateString();
    alert(currentDate);
})