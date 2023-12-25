"use strict";

const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelectorAll(".close-modal");
const showModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", function () {
    console.log(showModal[i].textContent + " button clicked");
    modal[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

const closeModalWindow = function () {
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.add("hidden");
    overlay.classList.add("hidden");
  }
};

for (let i = 0; i < modal.length; i++) {
  closeModal[i].addEventListener("click", closeModalWindow);
}

overlay.addEventListener("click", closeModalWindow);

// Escape button
document.addEventListener("keydown", function (event) {
  for (let i = 0; i < modal.length; i++) {
    if (event.key === "Escape" && !modal[i].classList.contains("hidden")) {
      closeModalWindow();
    }
  }
});
