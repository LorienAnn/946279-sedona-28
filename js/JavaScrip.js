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

/*button.addEventListener("click", function (evt) {
  if("form-hotels-none") {
    evt.preventDefault();
    form.classList.add("form-hotels");
    arrivals.focus();
  });
      /*в лекции и демонстрациях форма открывается и закрывается разными кнопками, а не одной. 
        а у меня одна кнопка, и тогда используется toggle, либо надо как-то указать,
        что при нажатии, если форма открыта, то скрыть, а если скрыта то открыть...
        но я не знаю как это сделать тк этого не показывали,  я и if пыталась использовать 
        и добавлять новые классы и тд, но не выходит( 
        Сейчас я повесила bounce на базовый стиль формы, но теперь при открытии сайта она сразу именно выплывает, а не стоит на месте.
        А если я создаю отдельный класс для bounce то я не могу его вписать в toggle тк тогда надо добавлять новые условия, 
        о которых я писала выше, а я не знаю как это сделать:(*/
 
form.addEventListener("submit", function (evt) {     
  if(!arrivals.value || !departures.value) {
  evt.preventDefault();
  form.classList.add ("form-error");              /* тут не получается :( */
} 
});
