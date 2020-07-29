const menuBtn1 = document.querySelector(".menu-btn1");
const menuBtn2 = document.querySelector(".menu-btn2");
const menuBtn3 = document.querySelector(".menu-btn3");
const menuBtn4 = document.querySelector(".menu-btn4");

// First Animation Button
let menuOpen = false;
menuBtn1.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn1.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn1.classList.remove("open");
    menuOpen = false;
  }
});

// Second Animation Button
menuBtn2.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn2.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn2.classList.remove("open");
    menuOpen = false;
  }
});

// Third Animation Button
menuBtn3.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn3.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn3.classList.remove("open");
    menuOpen = false;
  }
});

// Fourth Animation Button
menuBtn4.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn4.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn4.classList.remove("open");
    menuOpen = false;
  }
});
