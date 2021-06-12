const SECOND_IN_1_MINUTE = 60;
const MAX_SECOND = 3600;
const MIN_SECOND = 0;
const ONE_SECOND = 1;

const minusSecond = document.getElementById("minus-second");
const minusMinute = document.getElementById("minus-minute");

const plusSecond = document.getElementById("plus-second");
const plusMinute = document.getElementById("plus-minute");

const numSecond = document.getElementById("num-second");
const numMinute = document.getElementById("num-minute");

const start = document.getElementById("start");
const reset = document.getElementById("reset");

const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");

const processWrapper = document.getElementById("process-wrapper");

let second = 0;
let prevSecond = 0;
let isCounting = false;
var interval;

const showNumTime = () => {
    const tempSecond = second % SECOND_IN_1_MINUTE;

    numSecond.innerHTML = tempSecond < 10 ? `0${tempSecond}` : tempSecond;

    const tempMinute = (second - tempSecond) / SECOND_IN_1_MINUTE;
    numMinute.innerHTML = tempMinute < 10 ? `0${tempMinute}` : tempMinute;

    secondHand.style.transform = `rotate(${tempSecond / SECOND_IN_1_MINUTE * 360}deg)`;

    minuteHand.style.transform = `rotate(${((second - tempSecond) / SECOND_IN_1_MINUTE)* 6}deg)`;

    showHandClock()
}

const showUiWhenCounting = () => {
    start.innerHTML = isCounting ? `<i class="uil uil-pause"></i>Stop` : `<i class="uil uil-play"></i>Start`;

    reset.style.cursor = isCounting ? "not-allowed" : "pointer";
    reset.disabled = isCounting ? true : false;

    plusSecond.style.cursor = isCounting ? "not-allowed" : "pointer";
    plusMinute.style.cursor = isCounting ? "not-allowed" : "pointer";

    minusSecond.style.cursor = isCounting ? "not-allowed" : "pointer";
    minusMinute.style.cursor = isCounting ? "not-allowed" : "pointer";
}

plusMinute.addEventListener("click", () => {
    if (isCounting) {
        return;
    }

    if (second + SECOND_IN_1_MINUTE >= MAX_SECOND) {
        return;
    }
    second += SECOND_IN_1_MINUTE;
    showNumTime();

})

plusSecond.addEventListener("click", () => {
    if (isCounting) {
        return;
    }

    if (second >= MAX_SECOND) {
        return;
    }
    second += ONE_SECOND;
    showNumTime()
})

minusMinute.addEventListener("click", () => {
    if (isCounting) {
        return;
    }

    if (second - SECOND_IN_1_MINUTE < MIN_SECOND) {
        return;
    }
    second -= SECOND_IN_1_MINUTE;
    showNumTime()
})

minusSecond.addEventListener("click", () => {
    if (isCounting) {
        return;
    }

    if (second <= MIN_SECOND) {
        return;
    }
    second -= ONE_SECOND;
    showNumTime()
})

start.addEventListener("click", () => {
    if (second === MIN_SECOND) {
        return;
    }

    if (isCounting) {
        stopInterval()
        return;
    }

    startInterval()
})

const startInterval = () => { 
    processWrapper.style.width = "100%"

    isCounting = true;
    prevSecond = second
    showUiWhenCounting();

    interval = setInterval(() => {
        if (second - ONE_SECOND <= MIN_SECOND) {
            stopInterval()
        }
        second -= ONE_SECOND;

        processWrapper.style.width = `${second/prevSecond * 100}%`

        showNumTime();

    }, 1E3)
}

const stopInterval = () => {
    isCounting = false;
    showUiWhenCounting();
    clearInterval(interval);
}

reset.addEventListener("click", () => {
    second = MIN_SECOND;
    showNumTime();
})

showNumTime()