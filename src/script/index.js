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
// Random colour generator in hexa number
const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};
// Functional check which key the user is pressing
const keyCheck = (event) => {
  console.log(event);
  if (e.key == "Enter") addToList();
};
// Adding event listener to the input
// const userInput = document.querySelector("#userData");
// userInput.addEventListener("keypress", keyCheck);

// Adding event listener to the form
document.querySelector("form").addEventListener("submit", addToList);
