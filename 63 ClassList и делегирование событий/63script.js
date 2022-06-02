const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');
console.dir(btns[0].classList); // DOMTokenList['blue', 'some', value: 'blue some']
console.log(btns[0].classList.item(0)); //выводит класс элемента по указанному индексу
// btns[0].classList.add('red, anotherclass'); // можно добавлять несколько классов
btns[0].classList.remove('blue');
btns[0].classList.toggle('blue');

btns[0].addEventListener('click', () => {
     if (!btns[1].classList.contains('red')) { //проверка на наличее класса
         btns[1].classList.add('red');
     } else {
         btns[1].classList.remove('red');
     }
});

// Делегирование позволяет повесить обработчик события используя родительский элемент в качестве базы.
// И, проверяя например tagName или className можно выводить действия для конкретных дочерных эелементов,
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") { // не все элементы можно кликнуть поэтому
        // для 100% правильной работы нужно проверить event.target
        console.log('hello');

    }
});

// события делегирования распространняются даже на новые объекты
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);