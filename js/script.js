var button = document.querySelector(".button-brown");
var form = document.querySelector(".form-hotels");
var arrivals = document.querySelector(".input-form-arrivals");
var departures = document.querySelector(".input-form-departures");
var adults = document.querySelector(".adult-label");
var children = document.querySelector(".children-label")

form.classList.toggle("form-hotels-none"); 
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-hotels-none");
  arrivals.focus(); 
});

form.addEventListener("submit", function (evt) {     
  if(!arrivals.value || !departures.value || !adults.value || !children.value) {
    evt.preventDefault(); 
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
    console.log("Необходимо ввести логин и пароль");
    }           
});

form.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    form.classList.toggle("form-hotels-none");
  }
});