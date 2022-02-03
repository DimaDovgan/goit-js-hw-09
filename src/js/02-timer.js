import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const startBtn = document.querySelector("[data-start]");
const day = document.querySelector("span[data-days]");
const hour = document.querySelector("span[data-hours]");
const minute = document.querySelector("span[data-minutes]");
const second = document.querySelector("span[data-seconds]");
startBtn.disabled = true;

let data = {};
const options={
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        data = selectedDates[0];
        if (data.getTime() <= new Date().getTime()) {
          Notify.failure("Please choose a date in the future");
            startBtn.disabled = true;
            clearInterval(Timer.intervalId);
            return;
      }
      startBtn.disabled = false;
      return data;
    },
};
flatpickr("#datetime-picker", options);



class Timer{
  constructor(onTick, data) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    this.data = data;
  }
  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
  }
  start() {
    
    if (this.isActive === false) {
      this.intervalId = setInterval(() => {
        let Time = this.convertMs(data.getTime() - new Date().getTime());
          this.onTick(Time);
         
        
      }, 1000);
      this.isActive = true;
    }
    
      
  }

}

const newTimer = new Timer(renderTime,data);
function addLeadingZero(value) {
    return value.toString().padStart(2,0)
}
  
function renderTime({ days, hours, minutes, seconds }) {
    day.textContent = addLeadingZero(days);
                hour.textContent = addLeadingZero(hours);
                minute.textContent = addLeadingZero(minutes);
                second.textContent = addLeadingZero(seconds);
}
startBtn.addEventListener("click", newTimer.start.bind(newTimer));























































// let data = {};
// // let intervalId = null;
// const options={
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         data = selectedDates[0];
//         if (data.getTime() < new Date().getTime()) {
//             window.alert("Please choose a date in the future");
//             startBtn.disabled = true;
//             clearInterval(intervalId);
//             return;
//       }
//       startBtn.disabled = false;
//       return data;
//     },
// };


// class Timer{
//     constructor(onTick,option) {
//         //this.data = {};
//         this.intervalId = null;
//         this.isActive = false;
//       this.onTick = onTick;
//       this.Time = 0;
//       this.options = option;


//   }
  
  
//     start() {
//       this.intervalId = setInterval(() => {
//         console.log(options);
        
//         console.log(data);
//         if (data !== {}) {
//           let Time = this.convertMs(data.getTime() - new Date().getTime());
//                 this.onTick(Time);
//         }
        
                
                
            
//         }, 1000);
        
        
//     }
    

//     convertMs(ms) {
//   // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//   // Remaining days
//     const days = Math.floor(ms / day);
//   // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//     return { days, hours, minutes, seconds };
// }
//     addLeadingZero(value) {
//     return value.toString().padStart(2,0)
//   }
  
    
// }






// const startBtn = document.querySelector("[data-start]");
// const day = document.querySelector("span[data-days]");
// const hour = document.querySelector("span[data-hours]");
// const minute = document.querySelector("span[data-minutes]");
// const second = document.querySelector("span[data-seconds]");

// startBtn.disabled = true;

// const newTimer = new Timer({
//   onTick: renderTime,
//   option:options,
// });

// flatpickr("#datetime-picker", options);
// startBtn.addEventListener("click", newTimer.start());
// //let foo = options.onClose();




// function renderTime({ days, hours, minutes, seconds }) {
//     day.textContent = addLeadingZero(days);
//                 hour.textContent = addLeadingZero(hours);
//                 minute.textContent = addLeadingZero(minutes);
//                 second.textContent = addLeadingZero(seconds);
    
// }




