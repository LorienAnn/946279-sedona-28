/*var button = document.querySelector(".button-brown");
var form = document.querySelector(".form-hotels");
var search = document.querySelector("input-form");
button.onclick = function() {
    form.classList.toggle("form-hotels-none");
    search.focus();
  };*/
 
var button = document.querySelector(".button-brown");
var form = document.querySelector(".form-hotels");
var arrivals = document.querySelector(".input-form-arrivals");
var departures = document.querySelector(".input-form-departures");
var form = document.querySelector (".form-hotels");
 
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-hotels-none");
  arrivals.focus(); 
});

button.addEventListener("click", function (evt) {    /* Не получается :( */
  evt.preventDefault();
  form.classList.toggle ("form-show");
  /*form.classList.toggle ("form-show-bounce");*/
  arrivals.focus(); 
});

form.addEventListener("submit", function (evt) {     
  if(!arrivals.value || !departures.value) {
  evt.preventDefault();
  form.classList.add ("form-error")              /*и тут не получается :( */
} 
});
