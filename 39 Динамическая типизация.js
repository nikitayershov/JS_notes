// To String

// 1) String() – самый старый и редко используемый
console.log(String(null)); // 'null'
console.log(String(4)); // '4'

// 2) Конкатенация – сложение строки с чем-то
console.log(5 + 'string'); // '5string'

const num = 5;
console.log('https://www.udemy.com/course/' + num); // string

const fontSize = 26 + 'px'; // '26 px

// To Number

// 1) Number() - редко используется
console.log(Number('4')); // 4

// 2) Унарный плюс
console.log(+'5'); // 5

// 3) parseInt()
console.log(parseInt("15px", 10));

// let answ = +prompt('Hello', '');

// To boolean

// false = 0, '', null, undefined, NaN;

// 1) Нативное преобразование
let switcher = null;

if (switcher) { // не выполняется
    console.log('Working...');
}

switcher = 1;

if (switcher) { // выполняется
    console.log('Working...');
}

// 2) Boolean()
console.log(Boolean(('4'))); // 4

// 3) !!
console.log(!!"44444"); // true
