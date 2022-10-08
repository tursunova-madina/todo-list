"use strict";

let wrapper = document.querySelector(".wrapper"),
  btn = document.querySelector(".btn"),
  input = document.querySelector(".form-control"),
  ul = document.querySelector(".ul");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const inputText = input.value;

  let text = document.createElement("li");
  text.classList.add("text");

  text.textContent = inputText;
  input.value = "";

  ul.appendChild(text);
});
