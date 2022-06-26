"use strict";

const arr = [111, 12 , 2, 3, 6];

arr.pop(); //удаляет последний элемент массива
arr.push(10); // добавляет значение в конец массива
arr.sort(compareNum); // сортирует числа по возрастанию, обязательно нужно прописать функцию compareNum

function compareNum(a, b) {
 return a - b;
}

console.log(arr); //[ 2, 3, 10, 12, 111 ]

// обычный цикл for
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// цикл for . .. of (подходит для работы с массивоподобными сущностями, не подходит для объектов
for (let value of arr) {
    console.log(value);
}

// метод forEach()
arr.forEach(function (item, i, arr){
console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = "brad, cheese, carrot, milk";
const products = str.split(', ');
products.sort();

console.log(products.join(' - '));

