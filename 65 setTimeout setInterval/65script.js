const btn = document.querySelector('.btn'); //кнопка

function myAnimation() {
    const elem = document.querySelector('.box'); //элемент анимации
    let pos = 0; // изначальная позиция элемента (absolute)

    const id = setInterval(frame, 10);
    function frame() {
        if (pos === 300) {
            clearInterval(id); //остановка интервала с помощью переменной id
        } else {
            pos++;
            elem.style.top = pos + 'px'; // вертикально сдвигает элемент
            elem.style.left = pos +'px'; // горизонтально сдвигает элемент
        }
    }
}

btn.addEventListener('click', myAnimation);// запуск анимации по клику


// btn.addEventListener('click', () => {
//     const timerId = setTimeout(logger, 2000);
//
// });
//
// const timerId = setTimeout(logger, 2000); //запись setTimeout в переменную нужна для облегчения остановки
//     //  таймера в будущем
//
// clearInterval(timerId);
//
// function logger () {
//     console.log('text');
// }

const timerId = setTimeout(function(text) {
    console.log(text);
}, 200, 'Hello');

let id = setTimeout(function log() {
    console.log('hello');
    id = setTimeout(log, 500);
}, 500);