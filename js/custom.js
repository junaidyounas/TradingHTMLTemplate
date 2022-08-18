
/***** CLOCK JAVASCRIPT *******/

var timer2 = "10:45";
var interval = setInterval(function() {


  var timer = timer2.split(':');
  //by parsing integer, I avoid all extra string processing
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  //minutes = (minutes < 10) ?  minutes : minutes;
  $('.countdown').html(minutes + ':' + seconds);
  if (minutes < 0) clearInterval(interval);
  //check if both minutes and seconds are 0
  if ((seconds <= 0) && (minutes <= 0)) clearInterval(interval);
  timer2 = minutes + ':' + seconds;
}, 1000);


/***** CLOCK JAVASCRIPT *******/

var timer22 = "14:15";
var interval2 = setInterval(function() {


  var timer = timer22.split(':');
  //by parsing integer, I avoid all extra string processing
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  //minutes = (minutes < 10) ?  minutes : minutes;
  $('.countdown2').html(minutes + ':' + seconds);
  if (minutes < 0) clearInterval(interval2);
  //check if both minutes and seconds are 0
  if ((seconds <= 0) && (minutes <= 0)) clearInterval(interval2);
  timer22 = minutes + ':' + seconds;
}, 1000);


/***** COPY TEXT JAVASCRIPT *******/

// Select on pressing COPY
var copybutton = document.querySelectorAll("[data-copy]");
for (var i = 0; i < copybutton.length; i++) {
  var el = copybutton[i];
  el.addEventListener("submit", function(e) {
    e.preventDefault();
    var text = e.target.querySelector('input[type="text"]').select();
    document.execCommand("copy");
  });
}

// Select all text when pressing inside text field
var els_selectAll = document.querySelectorAll("[data-click-select-all]");
for (var i = 0; i < els_selectAll.length; i++) {
  var el = els_selectAll[i];
  el.addEventListener("click", function(e) {
    e.target.select();
  });
}



const menuBtn = document.querySelector('.menuBar');
const body = document.body;
menuBtn.addEventListener('click',()=>{
  body.classList.toggle('show-menu')
})