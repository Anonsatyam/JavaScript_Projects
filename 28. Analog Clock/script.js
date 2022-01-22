const toggle = document.querySelector(".dark");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const timeDisplay = document.querySelector(".time");
const dateDisplay = document.querySelector(".date");
const html = document.querySelector("html")

toggle.addEventListener('click', e => {
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        console.log(e.target.innerHTM);
        e.target.innerHTML = "Light Mode"
    } else {
        html.classList.add("dark");
        e.target.innerHTML = "Dark Mode"
    }
})

var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function setTime() {
    const time = new Date();
    const months = time.getMonth();
    const days = time.getDay();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const date = time.getDate();
    const hoursForClock = hours % 12;
    const ampm = hour <= 12 ? 'AM' : 'PM';

    hour.style.transform = `translate(-50% , -100% ) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minute.style.transform = `translate(-50% , -100% ) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    second.style.transform = `translate(-50% , -100% ) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
    timeDisplay.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateDisplay.innerHTML = `${day[days]} ${month[months]} ${date}`
}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
setTime();

setInterval(setTime, 1000);