const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const menuIsOpen = navLinks.classList.toggle("nav-open");

  menuButton.setAttribute("aria-expanded", menuIsOpen);
});
