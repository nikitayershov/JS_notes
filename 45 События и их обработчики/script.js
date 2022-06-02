const btn = document.querySelector('button');

// 1) .onclic невозможно назначать несколько действий на одно событие
// btn.onclick = function () {
//     alert('Click');
// };

// 2) .addEventListener позволяет назначать несколько действий на одно событие
btn.addEventListener('mouseenter', (e) => { // первым пзаписуется аргумент события,
    // за ним – любые остальные
    console.log(e.target); //<button id="btn">Нажми меня</button>
    console.log('Hover');
});

// удаление addEventListener
let i = 0;
const deleteElement = (e) => {
    // e.target.remove();
    console.log(e.target);
    i++;
    if (i === 1) {
        btn.removeEventListener('click', deleteElement); // удаляет addEventListener
    }
};

btn.addEventListener('click', deleteElement); // функция прописывается без круглых скобок

btn.addEventListener('click', deleteElement, {once:true}); // {once:true}
// позволяет удалить обработчик события после первого выполнения


// Всплытие событий: Если существует два вложеных елемента, которым присвоено оно и тоже событие,
// то первым будет обрабатываться элемент который нахадится более вложено и позже поднимается по иерархии ДОМ дерева
// e.target выводит элемент на котором произошло событие e.currentTarget позволяет увидеть вложенный объект


// preventDefault Отменяет стандартное поведение браузера
const link = document.querySelector('a');
link.addEventListener('click',  (e) => {
    e.preventDefault();

    console.log(e.target);
});

