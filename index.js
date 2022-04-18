"use strict";
let toggle = false;
const menuIcon = document.querySelector(".menu-icon");
const navigation = document.querySelector(".navigation");

menuIcon.addEventListener("click", function () {
  navigation.style.transition = "left 0.5s cubic-bezier(1, 0, 0, 1)";
  if (!toggle) {
    navigation.style.left = "8rem";
    toggle = true;
  } else {
    navigation.style.left = "-32rem";
    toggle = false;
  }
});

document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
