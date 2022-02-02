const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");


const startColorChange = () => {
    intervalIdColorChange = setInterval(() => {
        body.style.backgroundColor=getRandomHexColor();
        
    }, 1000)
    startBtn.disabled = true;
    stopBtn.disabled = false;

}
const stopColorChange = () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;

    clearInterval(intervalIdColorChange);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener("click", startColorChange);
stopBtn.addEventListener("click", stopColorChange);
