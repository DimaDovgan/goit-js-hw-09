import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position,delay});
      } else {
        reject({position,delay});
      }
    }, delay);
  });
}

const refs = {
  
  form: document.querySelector("form.form"),
}

const submit = (Event) => {
  Event.preventDefault();
  
  const {
    elements: { delay, step,amount }
  } = Event.currentTarget;
 
  for (let i = 0; i < amount.value; i += 1){
    let specialDelay = parseInt(delay.value, 10) + i * parseInt(step.value, 10);
    createPromise(i+1,specialDelay).then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notify.failure(` Rejected promise ${position} in ${delay}ms`);
  });
    
  }
  
}
refs.form.addEventListener("submit", submit);

