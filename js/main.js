// Select DOM elements
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const menuBranding = document.querySelector(".menu-branding");

// Set Initial State of Menu
let show_menu = false;
menuBtn.addEventListener("click", e => {
  if (!show_menu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(i => i.classList.add("show"));

    show_menu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(i => i.classList.remove("show"));

    show_menu = false;
  }
});
