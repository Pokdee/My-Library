"use strict";

const container = document.querySelector(".container");
const form = document.querySelector(".form");
const inDAta = document.querySelectorAll(".input");
const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".btn-sub");
const btnDel = document.querySelector(".btnRmove");
// const Book = function (name, author, pages, read) {
//   this.name = name;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = function () {
//     return `${this.read}`;
//   };
// };

let myLibrary = [
  {
    name: "The Title",
    author: "John",
    pages: 123,
    read: "read ",
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
    <h3>${book.read}</h3>
    <button id = "${i}" class ="btnRmove">Remove Book</button>
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
  myLibrary.push(obj);
  inDAta.forEach((i) => (i.value = ""));
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
