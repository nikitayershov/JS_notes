'use strict';

// Получение объектов DOM:

const box = document.getElementById('box');

const btns = document.getElementsByTagName("button"); // возвращает псевдомассив
// для взаимодействия нужно обращаться по индексу
console.log(btns[0]);

const circules = document.getElementsByClassName('circle');

const hearts = document.querySelectorAll('.heart'); // возвращает псевдомассив с доступным методом forEach

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
