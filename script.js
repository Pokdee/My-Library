"use strict";

const container = document.querySelector(".container");
const form = document.querySelector(".form");
const inDAta = document.querySelectorAll(".input");
const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".btn-sub");

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
const displayBook = function () {
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const html = `
    <div class="book">
    <h3>${book.name}</h3>
    <h3>${book.author}</h3>
    <h3>${book.pages}</h3>
    <h3>${book.read}</h3>
  </div>
    `;
    container.insertAdjacentHTML("afterbegin", html);
  }
};
displayBook();

//Form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  let obj = {};

  for (let items of data) {
    obj[items[0]] = items[1];
  }
  console.log(obj);
  myLibrary.push(obj);
  console.log(myLibrary);
  inDAta.forEach((i) => (i.value = ""));
});

//Show Form

btnAdd.addEventListener("click", () => {
  form.classList.remove("goaway");
  container.classList.add("goaway");
});
btnSub.addEventListener("click", () => {
  form.classList.add("goaway");
  container.classList.remove("goaway");
  displayBook();
});
