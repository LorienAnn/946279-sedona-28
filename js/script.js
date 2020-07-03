var button = document.querySelector(".button-brown");
var form = document.querySelector(".form-hotels");
var arrivals = document.querySelector(".input-form-arrivals");
var departures = document.querySelector(".input-form-departures");
var adults = document.querySelector(".adult-label");

form.classList.toggle("form-hotels-none"); 
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-hotels-none");
  arrivals.focus(); 
});

form.addEventListener("submit", function (evt) {     
  if(!arrivals.value || !departures.value || !adults.value) {
  evt.preventDefault(); 
  form.classList.remove("form-error");
  form.offsetWidth = form.offsetWidth;
  form.classList.add("form-error");
  arrivals.focus(); 
  console.log("Необходимо ввести логин и пароль");
  }           
});

form.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  if (form.classList.contains("form-hotels")) {
      evt.preventDefault();
      form.classList.toggle("form-hotels-none");
    }
  }
});