const addToList = (e) => {
  e.preventDefault();
  let userData = document.querySelector("#userData").value;
  if (userData != "") {
    let newItem = document.createElement("p");
    let text = document.createTextNode(userData);
    newItem.appendChild(text);
    document.querySelector(".result").appendChild(newItem);
    document.querySelector("#userData").value = "";

    const newContainer = document.createElement("span");
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    doneButton.innerHTML = "✅";
    deleteButton.innerHTML = "❌";

    newContainer.appendChild(doneButton);
    newContainer.appendChild(deleteButton);

    doneButton.classList.add("done");
    newItem.appendChild(newContainer);

    // toggle will check if the class name exist, will remove it and if it's not will add it
    const check = () => newItem.classList.toggle("completed");

    deleteButton.addEventListener("click", () => newItem.remove());
    doneButton.addEventListener("click", check);
  } else {
    document.querySelector("#userData").placeholder = "Things to Do . . .";
  }
};
const keyCheck = (event) => {
  if (e.key == "Enter") addToList();
};
document.querySelector("form").addEventListener("submit", addToList);
