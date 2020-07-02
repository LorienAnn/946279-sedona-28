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

button.addEventListener("click", function (evt) {        /*в лекции и демонстрациях форма открывается и закрывается разными кнопками, а не одной. 
                                                            а у меня одна кнопка, и тогда используется toggle, либо надо как-то указать,
                                                            что при нажатии, если форма открыта, то скрыть, а если скрыта то открыть...
                                                            но я не знаю как это сделать тк этого не показывали, а сама я и if пыталась использовать 
                                                            и добавлять новые классы и тд, но не выходит( а когда я использу toggle то не получается 
                                                              её плавно открыть*/
  evt.preventDefault();
  form.classList.toggle ("form-hotels-none");
  form.classList.toggle ("form-show-bounce");
  arrivals.focus(); 
});

form.addEventListener("submit", function (evt) {     
  if(!arrivals.value || !departures.value) {
  evt.preventDefault();
  form.classList.add ("form-error")              /* тут не получается :( */
} 
});
