const pomodoroTime = document.querySelector('#pomodoro-time');
const startBtn = document.querySelector('#start');


let timerId;
let time = 1500;


function countDownTime() {
    let minutes = Math.floor(time / 60);
    if (minutes < 10) {
      minutes = '0' + minutes;
    }  
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = '0' + seconds;
    };
    pomodoroTime.textContent = `${minutes}:${seconds}`;
    time--;

    if (time <= 0) {
        clearInterval(timerId);
        pomodoroTime.textContent = '25:00';
    } 

    

}

function createButtonStop() {
    const stop = document.createElement('button');
    stop.classList.add('stop', 'btn', 'btn-big');
    stop.textContent = 'stop';
    startBtn.replaceWith(stop);
    stop.addEventListener('click', function() {
      clearInterval(timerId);
      stop.replaceWith(startBtn);
   })
}


startBtn.addEventListener('click', function() {
    timerId = setInterval(countDownTime, 10); 
    createButtonStop()
})