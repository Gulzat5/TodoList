const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const Button = document.getElementById("btn");

const Addtask = () => {
  let Li = document.createElement("li"); // Создайте новый элемент li каждый раз
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    Li.innerText = inputBox.value; // Установите текст перед добавлением элемента
    listContainer.appendChild(Li);
    Button.removeEventListener("click", Addtask);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    Li.appendChild(span);
  }
  inputBox.value = "";
  saveDate();
};

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "li") {
    e.target.classList.toggle("checked");
    console.log("IF clicked");
  } else if (e.target.tagName.toLowerCase() === "span") {
    e.target.parentElement.remove();
    console.log("Else id clicked");
  }
});

function saveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

document.addEventListener("DOMContentLoaded", function () {
  showTask();
});
