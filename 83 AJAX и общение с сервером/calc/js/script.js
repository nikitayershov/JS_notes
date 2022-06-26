'use strict';

const inputUAH = document.querySelector('#uah');
const inputUSD = document.querySelector('#usd');

inputUAH.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); // собирает настройки, которые помогут в будущем сделать запрос
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8') // заголовок
    request.send(); //отправка запроса

    request.addEventListener('readystatechange', () => { // обработчик изменения state (4 = done)
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response); // возвращает json ответ сервера
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = "Error"
        }

    });
});
    // Свойства запросов
    // status 200 - OK, 404 - Not Found
    // statusText
    // response - ответ сервера
    // readyState текущее состояние объекта XMLHttpRequest, 4 - DONE
