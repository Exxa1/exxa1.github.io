
// NAV
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");
var about = document.getElementById("about");
var navcontact = document.getElementById("navContact")

contact.style.display = "none";
about.style.display = "none";

function portfoliof() {
  contact.style.display = "none";
  about.style.display = "block";
  portfolio.style.display = "block";
}

function contactf() {
  contact.style.display = "block";
  about.style.display = "none";
  portfolio.style.display = "none";
}

function aboutf() {
  contact.style.display = "none";
  about.style.display = "block";
  portfolio.style.display = "none";
}

// Email

var email = document.getElementById("jsemail");
var type = "photography";
var domain = "aronkuna.com";

email.innerHTML = type + "@" + domain;
