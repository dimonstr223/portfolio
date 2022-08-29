"use strict";

// smooth scroll by anchords
const anchors = document.querySelectorAll('a[href*="#"]');

const scroll = (anch) => {
  for (const anchor of anch) {
    if (anchor) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const anchorID = this.getAttribute("href");
        document.querySelector(anchorID).scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      });
    }
  }
};

scroll(anchors);

// hide and show ScrollUp button
const scrollUpBtn = document.querySelector(".up-btn");

const hideScrollUpBtn = (btn) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 115) {
      btn.classList.remove("up-btn--hide");
    } else {
      btn.classList.add("up-btn--hide");
    }
  });
};

hideScrollUpBtn(scrollUpBtn);

// email form

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("contact_service", "contact_form", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

      clearForm();
    });
};

const formName = document.querySelector(".contact__form-name");
const formEmail = document.querySelector(".contact__form-email");
const formTextarea = document.querySelector(".contact__form-textarea");

const clearForm = () => {
  formName.value = "";
  formEmail.value = "";
  formTextarea.value = "";
};

// burger menu
const icons = document.querySelector(".burger__menu-icon");
const nav = document.querySelector(".header__nav");
const navList = document.querySelector(".header__nav-list");

icons.addEventListener("click", () => {
  icons.classList.toggle("active");
  nav.classList.toggle("active");
});

navList.addEventListener("click", () => {
  nav.classList.toggle("active");
  icons.classList.toggle("active");
});

// LOGO REMOVE '/'
const headerSpan = document.querySelector(".header__name-spec");
const width = document.documentElement.clientWidth;

if (width <= 550) {
  headerSpan.textContent = "WEB DEVELOPER";
}
