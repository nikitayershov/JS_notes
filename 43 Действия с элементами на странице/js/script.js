'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');// можно искать внутри элемента вместо document;
const oneHeart = document.querySelector('.heart');

console.dir(box); // позволяет вывести элемент вы консоль в виде объекта

// box.style.backgroundColor = 'blue'; // добавляет инлайн стили (в HTML) они важнее CSS стилей
// box.style.width = '500px';
let num = 500;
box.style.cssText = `background-color: blue; width: ${num}px`; // позволяет добавить несколько инлайн стилей

btns[1].style.borderRadius = '20px';
circles[1].style.backgroundColor = 'red';

// для действий со всеми элементами псевдомассива можем использовать циклы
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

// но лучше использовать forEach()
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

// Создание новых элементов
const div = document.createElement('div'); //передаем название тега
// const text = document.createTextNode('Some text') //передача текста в узел (используется редко)

// вместо работы с инлайновыми стилями в проектах обычно добавляют или удаляют CSS классы
div.classList.add('black');

// для того чтобы вставить созданный элемент в HTML дерево (в конец тега body) используем:
document.body.append(div);

wrapper.append(div);// вставка элемента в конец тега wrapper

// вставка элемента в начало родительского тега .prepend()
wrapper.prepend(div);

// вставка перед элементом
hearts[0].before(div);

// вставка после элемента
hearts[0].after(div);

// удаление элементов со страницы
circles[0].remove();

//замена элемента hearts на элемент circles
hearts[0].replaceWith(circles[0]);


// устаревшие конструкции:
// wrapper.uppendChild() тоже самое что upend
// wrapper.insertBefore(div, hearts[0]) вставка div перед hearts[0];
// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[0], hearts[0]) //замена элемента hearts на элемент circles

// добавление текста элементу
// div.innerHTML = "Hello World"; //не безопасен, создан для работы с HTML структурами
// div.textContent = "Hello"; //безопасен, подходит только для работы с текстом

// С помошью innerHTML можно так же передавать HTML структуру
div.innerHTML = "<h1>Helllo World</h1>";

// вставка HTML структуры с помощью insertAdjacentHTML()
div.insertAdjacentHTML('beforebegin', '<h2>World</h2>'); //afterbegin beforeend afterend