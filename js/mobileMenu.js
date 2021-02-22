(function () {
  const mobileMenu = document.querySelector(".mobileMenu");
  const hamburgerIcon = document.querySelectorAll(".hamburgerMenuIcon");
  const body = document.querySelector("body");
  for (let i = 0; i <= hamburgerIcon.length; i++) {
    const bodyPositionStyle = getComputedStyle(body);
    hamburgerIcon[i].addEventListener("click", () => {
      mobileMenu.classList.toggle("mobileMenu--active");
      if (bodyPositionStyle.position === "fixed") {
        body.style.position = "relative";
      } else {
        body.style.position = "fixed";
      }
    });
  }
})();
