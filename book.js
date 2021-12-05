"use strict";
// Selecting DOM

const book = document.querySelector("#validationCustom01");
const author = document.querySelector("#validationCustom02");
const year = document.querySelector("#validationCustom03");
const check = document.querySelector("#invalidCheck");

const btn = document.querySelector(".btn");
const tbody = document.querySelector("#book-list");
const needValidaton = document.querySelector(".need-validation");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    book.value == "" ||
    author.value == "" ||
    year.value == "" ||
    check.checked == false
  ) {
    needValidaton.classList.add("was-validated");
  } else {
    //   create elements
    const tr = document.createElement("tr");

    const bookth = document.createElement("th");
    bookth.innerHTML = book.value;
    tr.appendChild(bookth);

    const authorTd = document.createElement("td");
    authorTd.innerHTML = author.value;
    tr.appendChild(authorTd);

    const yearTd = document.createElement("td");
    yearTd.innerHTML = year.value;
    tr.appendChild(yearTd);

    tbody.appendChild(tr);
  }
});
