var nav = document.getElementById("nav");

var openNav = function() {
  nav.classList.toggle("open");
};

nav.addEventListener("click", openNav);


// Email

var email = document.getElementById("jsemail");
var type = "info";
var domain = "leaplight.hu";

email.innerHTML = type + "@" + domain;
