let hour = document.querySelector("#hr");
let minute = document.querySelector("#min");
let second = document.querySelector("#sec");

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
setInterval(() => {
  let hrs = document.getElementById("hour");
  let min = document.getElementById("minute");
  let sec = document.getElementById("second");
  let meridian = document.getElementById("meridian");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let am = h >= 12 ? "PM" : "AM";
  // convert 24hr  clock to 12hr clock
  if (h > 12) {
    h = h - 12;
  }

  // add zero before a single digit
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hrs.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
  meridian.innerHTML = am;
});
