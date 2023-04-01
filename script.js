"use strict";

const container = document.querySelector(".container");
const form = document.querySelector(".form");
const inDAta = document.querySelectorAll(".input");
const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".btn-sub");
const btnDel = document.querySelector(".btnRmove");
const radio = document.querySelector(".radioInput");

let myLibrary = [
  {
    name: "The Title",
    author: "John",
    pages: 123,
    read: true,
  },
];
//DisplayBooks
const displayBook = function (array) {
  container.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const book = array[i];
    let html = `
    <div class="book">
    <h3>${book.name}</h3>
    <h3>${book.author}</h3>
    <h3>${book.pages}</h3>
    <h3>${book.read ? "Read" : "Not Read"}</h3>
    <div class='btnCon'>
    <button class = "read ${book.read ? "Rdone" : ""}"> Read </button>
    <button id = "${i}" class ="btnRmove">Remove</button>
    </div>
  </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
  }
};
displayBook(myLibrary);

//Form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  let obj = {};

  for (let items of data) {
    obj[items[0]] = items[1];
  }

  obj["read"] = obj.read ? true : false;
  myLibrary.push(obj);

  inDAta.forEach((i) => (i.value = ""));
  radio.checked = false;
  displayBook(myLibrary);
});

//Show Form

btnAdd.addEventListener("click", () => {
  form.classList.remove("goaway");
  container.classList.add("goaway");
});
btnSub.addEventListener("click", () => {
  form.classList.add("goaway");
  container.classList.remove("goaway");
});

//Remove Book

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnRmove")) {
    const bookIndex = e.target.getAttribute("id");
    myLibrary.splice(bookIndex, 1);
    displayBook(myLibrary);
  }
});

//Read Book

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("read")) {
    const index = e.target.nextElementSibling.getAttribute("id");
    if (myLibrary[index].read) {
      myLibrary[index].read = false;
    } else {
      myLibrary[index].read = true;
    }
    displayBook(myLibrary);
  }
});
