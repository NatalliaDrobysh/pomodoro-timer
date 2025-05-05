const pomodoroTime = document.querySelector('#pomodoro-time');
const startBtn = document.querySelector('#start');
let isRunning = false;

let timerId;
let time = 1500;


function countDownTime() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    pomodoroTime.textContent = `${createNull(minutes)}:${createNull(seconds)}`;
    time--;

    if (time <= 0) {
        clearInterval(timerId);
        pomodoroTime.textContent = '25:00';
        startBtn.textContent = 'start';
    }    

}


function createNull(value) {
  if (value < 10) {
    return '0' + value;
  } else {
    return value;
  }
}


startBtn.addEventListener('click', function() {
    if (isRunning == true) {
      clearInterval(timerId);
      startBtn.textContent = 'start';
      isRunning = false;
    } else {
       timerId = setInterval(countDownTime, 10);
       startBtn.textContent = 'stop';
       isRunning = true;
    }
})