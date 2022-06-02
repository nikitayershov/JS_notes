/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAds = document.querySelectorAll('.promo__adv img'),
    promoGenre = document.querySelector('.promo__genre'),
    promoBackground = document.querySelector('.promo__bg'),
    promoInteractiveList = document.querySelector('.promo__interactive-list');


promoAds.forEach(add => {
    add.remove();
});

promoGenre.textContent = 'драма';

promoBackground.style.backgroundImage = 'url("img/bg.jpg")';
// promo.style.cssText = 'background: url("../img/bg.jpg") no-repeat right center';

promoInteractiveList.innerHTML = '';

// let i = 1;
// for (let movie of movieDB.movies.sort()) {
//     promoInteractiveList.innerHTML +=
//         `<li class="promo__interactive-item">${i} ${movie}
//             <div class="delete"></div>
//          </li>`;
//     i++;
// }

movieDB.movies.sort().forEach((movie, i) => {
    promoInteractiveList.innerHTML +=
        `<li class="promo__interactive-item">${i + 1} ${movie}
            <div class="delete"></div>
         </li>`;
});