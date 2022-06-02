// touchstart касание элемента
// touchmove свайп по элементу
// touchend отрыв пальца от элемента
// touchenter попадание на элемент мобытия при ведении пальцем по экрану
// touchleave при свайпе палец ушел за пределы элемента
// touchcancel при свайпе палец ушел зпа пределы браузера


// touches выводит все пальцы на экране
// targetTouches выводит все пальцы на объекте
// changedTouches выводит пальцы которые совершили определенное назначенное действие

window.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
        console.log(e.targetTouches[0].pageX); // позволяет отслеживать перемещение по оси Х
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });

});
