'use strict';

const box = document.querySelector('.box');
const btn =document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
});
console.log(box.getBoundingClientRect());


const style = window.getComputedStyle(box);
console.log(style);

console.log(document.documentElement.clientWidth);

window.scrollBy(0, 400);// позволяет проскролить страницу на 400 px от текущего положения
window.scrollTo(0, 400);// позволяет проскролить страницу на 400 px от начала страницы