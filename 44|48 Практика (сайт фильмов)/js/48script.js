/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
        promoInteractiveList = document.querySelector('.promo__interactive-list'),
        confirmBtn = document.querySelector('.add button'),
        addForm = document.querySelector('form.add'),
        inputField = addForm .querySelector('.adding__input'),
        checkBox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = inputField.value;
        const favorite = checkBox.checked;

        if (newFilm) {

            if (newFilm.length > 21){
            newFilm = `${newFilm.slice(0, 21)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, promoInteractiveList);

            event.target.reset(); // очищает форму
        }


    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };


    const makeChanges = () => {
        promoGenre.textContent = 'драма';

        promoBackground.style.backgroundImage = 'url("img/bg.jpg")';
    };


    const sortArr = (arr) => {
        arr.sort();
    };



    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            promoInteractiveList.innerHTML +=
                `<li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
         </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i ) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }


    deleteAdv(promoAds);
    makeChanges();

    createMovieList(movieDB.movies, promoInteractiveList);



});


    // promoAds.forEach(add => {
    //     add.remove();
    // });
    //
    // promoGenre.textContent = 'драма';
    //
    // promoBackground.style.backgroundImage = 'url("img/bg.jpg")';
    //
    //








//     console.log(confirmBtn);
//
//     function showDB(DB) {
//         promoInteractiveList.innerHTML = '';
//
//         DB.movies.sort().forEach((movie, i) => {
//             promoInteractiveList.innerHTML +=
//                 `<li class="promo__interactive-item">${i + 1} ${movie}
//             <div class="delete"></div>
//          </li>`;
//         });
//     }
//     showDB(movieDB);
//
//     confirmBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (inputField.value.length >= 21){
//             inputField.value = `${inputField.value.slice(0, 21)}...`;
//         }
//         movieDB.movies.push(inputField.value);
//
//         if (checkBox.checked) {
//             console.log("Добавляем любимый фильм");
//         }
//
//         showDB(movieDB);
//
//         console.log(movieDB.movies);
//         console.dir(checkBox.value);
//     });
//
//     console.dir(deleteBtn);
//
//     deleteBtn.addEventListener('click', (e) => {
//         e.target.remove();
//
//     });
//
// });


