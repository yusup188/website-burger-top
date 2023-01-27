// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Saat menu di klik
document.querySelector("#b-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click di luar sidebar untuk menghilangkan menu
const menu = document.querySelector("#b-menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && navbarNav.contains(e.target)) {
    !navbarNav.classList.remove("active");
  }
});
// End Click di luar sidebar untuk menghilangkan menu
