let hour = document.getElementById("hr");
let minute = document.getElementById("min");
let second = document.getElementById("sec");

setInterval(() => {
  let day = new Date();
  let hr = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hour.style.transform = `rotateZ(${hr + mm / 12}deg)`;
  minute.style.transform = `rotateZ(${mm}deg)`;
  second.style.transform = `rotateZ(${ss}deg)`;
});

// Digital clock
let hrs = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");
let meridian = document.getElementById("meridian");

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let am = h>=12 ? "PM" : "AM";

// add zero before a single digit
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

hrs.innerHTML = h;
min.innerHTML = m;
sec.innerHTML = s;
