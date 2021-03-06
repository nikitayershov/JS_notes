'use strict';

// console.log('Запрос данных');
//
// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...');
//
//         const product = {
//             name: 'TV',
//             price: 300
//         };
//
//         resolve(product); // позволяет отправить данные в then
//     }, 2000);
// });
//
// req.then((product) => { // начинает выполняться как только выполнится resolve
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            product.status = 'order';
//            resolve(product);
//            // reject() // пропускает .then и переносит сразу к блоку catch
//        }, 2000);
//    });
// }).then(data => { // чейнинг (использование промисов без записи в переменные)
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => { //выполняется при reject()
//     console.error('Произошла ошибка');
// }).finally(() => { // выполняется последним (например очистка формы независимо от результата)
//     console.log('Finally')
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));


// Promise.all ожидает выполнения всех промисов
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All')
})

// Promise.race начинает выполнение когда какой-то из промисов отработал
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('First')
})