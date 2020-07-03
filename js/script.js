 
var button = document.querySelector(".button-brown");
var form = document.querySelector(".form-hotels");
var arrivals = document.querySelector(".input-form-arrivals");
var departures = document.querySelector(".input-form-departures");

form.classList.toggle("form-hotels-none"); 
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-hotels-none");
  arrivals.focus(); 
});

 
form.addEventListener("submit", function (evt) {     
  if(!arrivals.value || !departures.value) {
  evt.preventDefault(); 
  form.classList.add("form-error");  
  arrivals.focus();             
} 
});
