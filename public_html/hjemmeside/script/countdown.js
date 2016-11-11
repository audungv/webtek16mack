//Kode modifisert fra: http://stackoverflow.com/questions/9335140/how-to-countdown-to-a-date
var counter = document.getElementById('countdown')
var end = new Date(Date.UTC(2017,03,08,15));
//måned: 0-11, dag: 1-31, tid: 0-23
var day = 1000*60*60*24; //millisekunder*sekunder*minutter*timer


function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {
		counter.innerHTML = 'Vielsen var den 8. april 2017';
  }
	var days = Math.floor(distance/day);//runder nummeret
	counter.innerHTML = days + ' dager igjen til vielsen!';
}
showRemaining();
