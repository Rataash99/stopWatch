const watchtimer = document.querySelector('#timer');
const start = document.querySelector('#start-timer');
const stop = document.querySelector('#stop-timer');
const reset = document.querySelector('#reset-timer');
const clock = document.querySelector('.clock');
let timer;
let seconds = 0, minutes = 0;

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
    reset.disabled = false;
}
function handleStop(){
    clearInterval(timer);
    start.disabled = false;
}
function handleReset(){
    clock.classList.add("animate-wiggle");
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    watchtimer.textContent = "◕_◕";
    start.disabled = false;
    reset.disabled = true;


}

start.addEventListener('click', handleStart);
stop.addEventListener('click', handleStop);
reset.addEventListener('click', handleReset);


