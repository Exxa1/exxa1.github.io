var nav = document.getElementById("nav");

var openNav = function() {
  nav.classList.toggle("open");
};

nav.addEventListener("click", openNav);
