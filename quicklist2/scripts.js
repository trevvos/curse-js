const form = document.querySelector("form");
const add = document.getElementById("add-new-item");
const list = document.querySelector(".list");

let itemList = [];

form.onsubmit = (event) => {
  event.preventDefault();

  addNewItem(add.value);
  add.value = "";
};

function addNewItem(item) {
  itemList.push(item);
  renderList();
}

function renderList() {
  list.innerHTML = "";

  itemList.forEach((item, index) => {
    const listItem = document.createElement("div");
    listItem.classList.add("wrapper-list");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("data-index", index);

    const iconTrash = document.createElement("button");

    const imgTrash = document.createElement("img");

    imgTrash.setAttribute("src", "./assets/img/icons/icon-trash.svg");

    iconTrash.appendChild(imgTrash);

    iconTrash.addEventListener("click", () => {
      removeItem(index);
    });

    const itemText = document.createElement("div");
    itemText.textContent = item;

    listItem.appendChild(checkbox);
    listItem.appendChild(itemText);
    listItem.appendChild(iconTrash);

    list.appendChild(listItem);
  });
}

function removeItem(index) {
  itemList.splice(index, 1);

  renderList();

  showAlert();

  if (itemList.length === 0) {
    list.textContent = "A lista está vazia";
  }
}

function closeAlert() {
  const alertBox = document.querySelector(".alert");
  alertBox.classList.remove("show");
}

function showAlert() {
  const alertBox = document.querySelector(".alert");

  alertBox.classList.add("show");

  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
}
