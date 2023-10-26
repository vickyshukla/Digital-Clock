setInterval(showTime, 100);
function showTime() {

tday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

tmonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

let time = new Date();
let day = time.getDay();
let date = time.getDate();
let month = time.getMonth();
let year = time.getFullYear();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();
am_pm = "AM";
  
if (hour > 12) {
hour -= 12;
am_pm = "PM";
}

if (hour == 0) {
hr = 12;
am_pm = "AM";
}
  
hour = hour < 10 ? "0" + hour : hour;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;
  
let currentTime = tday[day] + "  <br><br>  " + date + " " + tmonth[month] + "  " + year + "  <br><br>  " + hour + " : " + min + " : " + sec + " " + am_pm;
  
document.getElementById("box").innerHTML = currentTime;

}
