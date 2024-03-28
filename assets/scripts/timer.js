const panelCountdown = document.querySelector("#panel-countdown");
const elDays = document.querySelector("#days");
const elDaysSpan = elDays.querySelectorAll("span");
const elHours = document.querySelector("#hours");
const elHoursSpan = elHours.querySelectorAll("span");
const elMinutes = document.querySelector("#minutes");
const elMinutesSpan = elMinutes.querySelectorAll("span");
const elSeconds = document.querySelector("#seconds");
const elSecondsSpan = elSeconds.querySelectorAll("span");

const currentDate = new Date();
const expirationDate = new Date(`2024-04-06 18:00`);

function getCurrentDate() {
    const currentDate = new Date();
    let timeDifference = expirationDate - currentDate;
    if (timeDifference < 0) {
        timeDifference = 0;
    }

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { years, months, days, hours, minutes, seconds };
}

function updateCountdown() {
    const { days, hours, minutes, seconds } = getCurrentDate();
    // update days
    let d = padTo2(days);
    if (d[0] != currentDays[0]) changeNum(elDaysSpan[0], d[0], 500);
    if (d[1] != currentDays[1]) changeNum(elDaysSpan[1], d[1], 450);
    currentDays = [d[0], d[1]];

    // update hours
    let h = padTo2(hours);
    if (h[0] != currentHours[0]) changeNum(elHoursSpan[0], h[0], 400);
    if (h[1] != currentHours[1]) changeNum(elHoursSpan[1], h[1], 350);
    currentHours = [h[0], h[1]];

    // update mins
    let mns = padTo2(minutes);
    if (mns[0] != currentMins[0]) changeNum(elMinutesSpan[0], mns[0], 300);
    if (mns[1] != currentMins[1]) changeNum(elMinutesSpan[1], mns[1], 250);
    currentMins = [mns[0], mns[1]];

    // update seconds
    let s = padTo2(seconds);
    if (s[0] != currentSecs[0]) changeNum(elSecondsSpan[0], s[0], 200);
    if (s[1] != currentSecs[1]) changeNum(elSecondsSpan[1], s[1], 150);
    currentSecs = { ...s };
}

function initalLoad() {
    const { days, hours, minutes, seconds } = getCurrentDate();
    // update days
    let d = padTo2(days);
    currentDays = [d[0], d[1]];
    elDaysSpan[0].innerText = currentDays[0];
    elDaysSpan[1].innerText = currentDays[1];

    // update hours
    let h = padTo2(hours);
    currentHours = [h[0], h[1]];
    elHoursSpan[0].innerText = currentHours[0];
    elHoursSpan[1].innerText = currentHours[1];

    // update mins
    let mns = padTo2(minutes);
    currentMins = [mns[0], mns[1]];
    elMinutesSpan[0].innerText = currentMins[0];
    elMinutesSpan[1].innerText = currentMins[1];

    // update seconds
    let s = padTo2(seconds);
    currentSecs = { ...s };
    elSecondsSpan[0].innerText = currentSecs[0];
    elSecondsSpan[1].innerText = currentSecs[1];
}

// Update the countdown initially in case the element is already visible
initalLoad();

// Set interval to update the countdown every second (as before)
let expirationDateInterval;

function startCountdownInterval() {
    clearInterval(expirationDateInterval);
    expirationDateInterval = setInterval(() => {
        updateCountdown();
    }, 1000);
}

// Start the countdown interval initially
startCountdownInterval();

function changeNum(el, newVal, timing) {

    timing = 250;
    el.classList.add("scale-0");

    setTimeout(() => {
        el.innerText = "";
        el.classList.remove("scale-0");
        //el.classList.add("-translate-y-24");
    }, timing);

    setTimeout(() => {
        el.innerText = newVal;
        //el.classList.remove("-translate-y-24");
    }, timing * 2);
}

function padTo2(num) {
    return num.toString().padStart(2, "0");
}