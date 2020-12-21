import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';

const root = document.getElementById('root')
const imgList = [img1, img2, img3];
let index = 0;
let timer;

function render() {
  ReactDOM.render(
    <img src={imgList[index]} alt="" />,
    root
  );
}
function start() {
  stop();
  timer = setInterval(() => {
    index = (index + 1) % 3;
    render()
  }, 1000)

}
function stop() {
  clearInterval(timer)
}

root.addEventListener('mouseenter', () => {
  stop()
})
root.addEventListener('mouseleave', () => {
  start()
})

render()
start()


