document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");
  var burger = document.querySelector(".navbar__burger");
  var mobile_nav = document.querySelector(".navbar__mobile__list");
  function toogle_mobilemenu() {
    mobile_nav.classList.toggle("active");
  }
  function toogle_mobilemenu_resize() {
    if (window.innerWidth > 480) {
      mobile_nav.classList.remove("active");
    }
  }
  function shrink_navbar() {
    if (window.scrollY == 0) {
      header.classList.remove("shrink");
    } else {
      header.classList.add("shrink");
    }
  }
  burger.addEventListener("click", toogle_mobilemenu);
  window.addEventListener("resize", toogle_mobilemenu_resize);
  window.addEventListener("scroll", shrink_navbar);
  document.getElementById("currentYear").textContent =
  new Date().getFullYear();
});
