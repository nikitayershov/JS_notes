'use strict';

// function showThis(a, b) {
//     console.log(this); // window/undefined
//     function sum() {
//         console.log(this); //window/undefined
//         return a + b;
//     }
//     console.log(sum()); // 9
// }
// showThis(4, 5);

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true
//     this.hello = function() {
//         console.log(`Hello ${this.name}`)
//     };
// }
// let  nikita = new User('Nikita', 26);
// console.log(nikita.hello()) // Hello Nikita


function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
}

//чтобы передать контекст вызова в функцию используем .call или .apply
sayName.call(user, 'Smith'); // в call аргументы функции передаются через запятую после объекта
sayName.apply(user, ['Smith']); // в apply аргументы функции передаются через массив
// в остальном, эти методы идентичны

function count(num) {
    return this*num; // bind передает 2 в this
}

const double = count.bind(2); // bind жестко привязывает контекст вызова к функции count
console.log(double(3)) // 6

// 1) Обычная функция: this = window, но если 'use strict' - undefined
// 2) Контекст у методов объекта – сам объект
// 3) this в конструкторах и в классах – это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind.

// const btn = document.querySelector('button');
//
// btn.addEventListener('click', function () {
//     console.log(this) // <button>Button</button> контекст равен значению e.target
// })

// // но при использовании стрелочной функции контекст ищется за пределами функции
// btn.addEventListener('click',  () => {
//     console.log(this) //  Window
// })

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => { // если была бы обычная функция this = undefined,
            // стрелочная функция берет контекст у своего родителя, родитель =  sayNumber: function (),
            // родитель sayNumber = obj (объект в котором существует метод)
            console.log(this.num); // 5 (this ссылается на объект obj)
        };

        say();
    }
}

obj.sayNumber();