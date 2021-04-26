const addToList = (e) => {
  e.preventDefault();
  let userData = document.querySelector("#userData").value;
  if (userData != "") {
    let newLi = document.createElement("p");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    document.querySelector(".item-input").appendChild(newLi);
    document.querySelector("#userData").value = "";
  }
};
