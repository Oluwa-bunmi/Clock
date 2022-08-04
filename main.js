let hour = document.getElementById("hr");
let minute = document.getElementById("min");
let second = document.getElementById("sec");


setInterval(() =>{
let day = new Date();
let hr = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

hour.style.transform = `rotateZ(${hr + mm / 12}deg)`;
minute.style.transform = `rotateZ(${mm}deg)`;
second.style.transform = `rotateZ(${ss}deg)`;
})
