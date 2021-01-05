const container = document.querySelector(".container");
const anime = document.querySelector(".anime");
const body = document.querySelector(".bdy");
const d = new Date()
const nextYear = d.getFullYear() + 1
document.title = 'Countdown ' + nextYear
document.getElementById('title').innerHTML = `<span>Countdown To New Year</span> ${nextYear}`
var countDate = new Date(`jan 1, ${nextYear} 00:00:00`).getTime();

function newYear() {
  var now = new Date().getTime();
  var gap = countDate - now;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var d = Math.floor(gap / day);
  var h = Math.floor((gap % day) / hour);
  var m = Math.floor((gap % hour) / minute);
  var s = Math.floor((gap % minute) / second);

  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
  if (d == 0 && h == 0 && m == 0 && s == 0) {
    for(let i = 0; i <= 3; i++){
      const el = document.getElementById(i) 
      el.textContent = nextYear.toString()[i]
    }
    container.style.opacity = "0";
    document.querySelector('.bg_video').style.display = 'block'
    anime.style.opacity = "1";
    setTimeout(() => {
      container.style.opacity = "1";
      document.querySelector('.bg_video').style.display = 'none'
      anime.style.opacity = "0";
    }, 5000)
  }
}

var myTimer = setInterval(function () {
  newYear();
}, 1000);
