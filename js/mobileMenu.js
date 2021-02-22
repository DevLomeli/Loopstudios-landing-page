const mobileMenu = document.querySelector(".mobileMenu");
const hamburgerIcon = document.querySelectorAll(".hamburgerMenuIcon");
const body = document.querySelector("body");
const menuItems = document.querySelectorAll(".mobileMenu__nav a");

let isActive = false;
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", () => {
    handleClickMobileMenu();
  });
}

for (let i = 0; i <= hamburgerIcon.length; i++) {
  hamburgerIcon[i].addEventListener("click", () => {
    handleClickMobileMenu();
  });
}

function handleClickMobileMenu() {
  isActive = !isActive;
  mobileMenu.classList.toggle("mobileMenu--active");
  if (isActive) {
    body.style.position = "fixed";
  } else {
    body.style.position = "relative";
  }
}
