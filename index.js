const watchtimer = document.querySelector('#timer');
const start = document.querySelector('#start-timer');
const stop = document.querySelector('#stop-timer');
const reset = document.querySelector('#reset-timer');
const clock = document.querySelector('.clock');

let timer; // timer for setting interval
let seconds = 0, minutes = 0; 

// handling realTime clock data 
function handleDate(){
    const currDay = document.querySelector('#day');
    const realTime = document.querySelector("#realTime-clock");
    const currDate = document.querySelector("#date");

    let daysArray = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];

    let date = new Date();
    let hourNow = date.getHours();
    let minuteNow = date.getMinutes();
    let day = date.getDay();
    let Year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dateToday = date.getDate();

    
    hourNow = hourNow < 10 ? '0' + hourNow : hourNow;
    minuteNow = minuteNow < 10 ? '0' + minuteNow : minuteNow;

    let period = hourNow >= 12 ? 'PM' : "AM";
    let timeString = hourNow + " : " + minuteNow + " " + period;

    realTime.textContent = timeString;
    currDay.textContent =  daysArray[day];
    currDate.textContent = `${dateToday}/${month}/${Year}`;
}
setInterval(handleDate, 1000); // setting interval for realTime clock

//handling start button
function handleStart(){
    clock.classList.remove("animate-wiggle");
    timer = setInterval(() => {
        if(seconds >= 60){
            minutes++;
            seconds = 0;
        }
        watchtimer.textContent = `${minutes < 10 ? 0 + '' + minutes : minutes} : ${seconds < 10 ? 0 + '' + seconds : seconds % 60}`
        seconds++;
    },1000);
    start.disabled = true;
    reset.disabled = false;ß
}

// handling stop button 
function handleStop(){
    clearInterval(timer);
    start.disabled = false;
}

// handling reset button 
function handleReset(){
    clock.classList.add("animate-wiggle");
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    watchtimer.textContent = "◕_◕";
    start.disabled = false;
    reset.disabled = true;
}

// event handlers for all start, stop and reset 
start.addEventListener('click', handleStart);
stop.addEventListener('click', handleStop);
reset.addEventListener('click', handleReset);


