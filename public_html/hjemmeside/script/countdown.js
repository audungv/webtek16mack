var counter = document.getElementById('countdown')
var end = new Date(2017,04,08,04,00);
var day = 1000*60*60*24; //sekunder*minutter*timer*dager
var timer; //??

function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {

  clearInterval(timer); //??
  counter.innerHTML = 'Vielsen var den 8. april 2017';

  return;
  }
var days = Math.floor(distance / day);
counter.innerHTML = days + ' dager igjen!';
}

timer = setInterval(showRemaining, 1000); //??
