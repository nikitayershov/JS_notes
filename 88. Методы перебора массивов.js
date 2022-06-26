'use strict';

// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function (name) {
    return name.length < 5
});

console.log(shortNames);


// map
const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => item.toLocaleLowerCase());

console.log(result);

// every/some
// some перебирает массив, и если хоть один элемент подходит по условию – возвращает true
// every перебирает массив, и если все элементы подходят по условию – возвращает true
const arr = [4, 'qwq', 'sfereferf'];

console.log(arr.some(item => typeof(item) === "number")); // true

console.log(arr.every(item => typeof(item) === "number")); // false

// reduce собирает масив в одно целое
const arrNum = [4, 5, 1];

// проходит по всем элементам массива и прибавляет их к sum (в данном случае)
//                            0      4 алгоритм перебора
//                            4      5
//                            9      1
const res = arrNum.reduce((sum, current) => sum + current);
// const res = arrNum.reduce((sum, current) => sum + current, 3); // можно передавать начальное значение

console.log(res) //10


// возможно использовать для работы со строками
const arrStr = ['apple', 'pear', 'plum'];

const str = arrStr.reduce((sum, current) => `${sum}, ${current}`);
console.log(str) // 'apple, pear, plum'

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj) // превращает объект в массив с массивами
    .filter(item => item[1] === 'person') //возвращает отфильтрованный массив [ [ 'ivan', 'person' ], [ 'ann', 'person' ] ]
    .map(item => item[0]) // возвращает только имена [ 'ivan', 'ann' ]


console.log(newArr)
