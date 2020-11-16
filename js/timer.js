
function theTimerSet() {
    let countDownDate = new Date("feb 14, 2021 00:00:00").getTime();
    let theclockJs = document.getElementById("clockPlace");
    let daysJs = document.getElementById('daysPlace');
    let hoursJs = document.getElementById('hoursPlace');
    let minutesJs = document.getElementById('minutesPlace');
    let secondsJs = document.getElementById('secondsPlace');
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    daysJs.innerHTML = days;
    hoursJs.innerHTML = hours;
    minutesJs.innerHTML = minutes;
    secondsJs.innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clockPlace").innerHTML = "EXPIRED";
    }

}
setInterval(theTimerSet, 1000);

export default theTimerSet;