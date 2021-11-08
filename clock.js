var hour = document.getElementById("hour");
var mintue = document.getElementById("mintue");
var seconds = document.getElementById("seconds");
var date;

var set_clock = setInterval (function clock(){
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today_date = new Date();
  var hr = today_date.getHours();
  var min = today_date.getMinutes();
  var sec = today_date.getMilliseconds();
  var date = today_date.toLocaleDateString("en-US", options); 
  
  
  var calculate_hr = (hr*30)+(min/12);
  var calculate_min = (min*6);
  var calculate_sec = sec*6;

  hour.style.transform = `rotate(${(calculate_hr)}deg)`;
  mintue.style.transform = `rotate(${(calculate_min)}deg)`;
  seconds.style.transform = `rotate(${(calculate_sec)}deg)`;
  document.getElementById("days").innerHTML = date

},1000)

