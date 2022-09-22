const hamburger = document.getElementById("hamburgerMenu");
const desktopNav = document.getElementById("js-desktopNav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  desktopNav.classList.toggle("active");
});

desktopNav.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  desktopNav.classList.toggle("active");
});
