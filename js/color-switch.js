"use strict";
const refs = {
    startBtn: document.querySelector('button[data-action="start"'),
    stopBtn: document.querySelector('button[data-action="stop"')
  },
  randomIntegerFromInterval = max => {
    return Math.floor(Math.random() * (max + 1));
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
  colorRandom = () => {
    const _color = colors[randomIntegerFromInterval(colors.length - 1)];
    console.log(_color);
    document.body.style.backgroundColor = _color;
  };

let colorClick = undefined;

refs.startBtn.addEventListener(
  "click",
  e =>
    (colorClick = colorClick
      ? colorClick
      : setInterval(() => colorRandom(), 1000))
);

refs.stopBtn.addEventListener("click", e => clearInterval(colorClick));
