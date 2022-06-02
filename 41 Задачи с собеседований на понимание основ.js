

// Какое будет выведено значение:
// let x = 5; alert( x++ ); //  5

// Чему равно такое выражение:
 [ ] + false - null + true // NaN

console.log([] + false); // 'false' (пустой массив равен пустой строке [] = '')
console.log('false' - null); // NaN
console.log(NaN + true); // NaN

// Что выведет этот код:
let y = 1;
let x = y = 2; // присваивание происходит справа на лево
console.log(x); // 2
//
// Чему равна сумма
const z = [ ] + 1 + 2 // '' + 1 = '1'; '1' + 2 = '12'
console.log(z)
//
// •	Что выведет этот код:
console.log( "1"[0] ) // '1' (к каждому элементу строки можно обратиться по его символу)

//Чему равно
console.log(2 && 1 && null && 0 && undefined ) // null (&& запинается на лжи)

// Есть ли разница между выражениями?
//!!( a && b ) и (a && b) // не равны

console.log(1 && 2); // 2
console.log(!!(1 && 2)) // true

//Что выведет этот код:
console.log( null || 2 && 3 || 4 ); // 3 (сначала И, потом ИЛИ)
// и запинается на лжи, ИЛИ запинается на правде

// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
a = [1, 2, 3]; // a не равно b так как это два отдельных массива с одинаковыми данными
b = [1, 2, 3];


// Что выведет этот код:
console.log( +"Infinity" ); // Infinity
//
// •	Верно ли сравнение:
console.log("Ёжик" > "яблоко") // false

//
// •	Чему равно
console.log(0 || "" || 2 || undefined || true || falsе) // 2
//
