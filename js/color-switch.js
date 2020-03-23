"use strict";
const refs = {
    startBtn: document.querySelector('button[data-action="start"'),
    stopBtn: document.querySelector('button[data-action="stop"')
  },
 
  colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
    "#d47553",
    "#57d453",
    "#d453bb",
    "#d47553",
    "#3eb9dd"
  ],
  randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const colorRandom =   {
  isActive: false,
  start() {
  if (this.isActive) {
  return;   
  }
  this.isActive = true;
  this.intervalId = setInterval(() => {
  const colorRandom = randomIntegerFromInterval(0, colors.length);
  console.log(colorRandom)
  document.body.style.backgroundColor = colors[colorRandom]
  }, 1000);

  },
  stop() {
  clearInterval(this.intervalId)
  this.isActive = false;
  }
  };

  refs.startBtn.addEventListener('click', colorRandom.start.bind(colorRandom));
  refs.stopBtn.addEventListener('click', colorRandom.stop.bind(colorRandom));