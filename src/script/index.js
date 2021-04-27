const addToList = (e) => {
  e.preventDefault();
  let userData = document.querySelector("#userData").value;
  console.log(userData);
  if (userData != "") {
    let newItem = document.createElement("p");
    let text = document.createTextNode(userData);
    newItem.appendChild(text);
    document.querySelector(".result").appendChild(newItem);
    document.querySelector("#userData").value = "";
    const newContainer = document.createElement("span");
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    // Adding some texnewItem
    doneButton.innerHTML = " ✓";
    deleteButton.innerHTML = "✗";
    // Injecting the buttons into the container
    newContainer.appendChild(doneButton);
    newContainer.appendChild(deleteButton);
    // Adding class
    doneButton.classList.add("done");
    newItem.appendChild(newContainer);
    // Complete function
    // toggle will check if the class name exist, will remove it and if it's not will add it
    const check = () => newItem.classList.toggle("completed");
    // const del = () => newItem.remove() ;
    // Adding event listener to my buttons
    deleteButton.addEventListener("click", () => newItem.remove());
    doneButton.addEventListener("click", check);
  } else {
    document.querySelector("#userData").placeholder = "Please Enter text first";
  }
};
const keyCheck = (event) => {
  if (e.key == "Enter") addToList();
};
document.querySelector("form").addEventListener("submit", addToList);
