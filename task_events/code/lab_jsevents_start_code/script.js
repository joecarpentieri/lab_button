const toDoForm = document.querySelector("#todo-form");
const enterButton = document.querySelector("#enter");
const textInput = document.querySelector("#text-input");
const deleteButton = document.querySelector("#delete");
const showDateButton = document.querySelector("#show-date");
const toDoList = document.querySelector("#list");

toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("button clicked");
    // get the input
    const createdListItem = document.createElement("li");
    createdListItem.innerText = event.target["new-todo"].value;
    list.appendChild(createdListItem);
})

// textInput.addEventListener("input", (event) => {
//     console.log(event);
// })

// deleteButton.addEventListener("click", () => {
//     console.log("deleted");
// })

toDoForm.addEventListener("submit", (event) => {
    toDoForm.textInput = event.target.value;
})

