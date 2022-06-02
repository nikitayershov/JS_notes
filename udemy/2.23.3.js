// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

firstTask();
// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
}
secondTask();
// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }
}
thirdTask();
// Место для четвертой задачи

// Цикл, который нужно переписать:
// let n = 2;
// while (n <= 16) {
//     if (n % 2 === 0) {
//         continue;
//     } else {
//         console.log(n);
//     }
//     n++;
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let n = 2;
    while (n <= 16) {
        if (n % 2 === 0) {
            n++;
            continue;
        } else {
            console.log(n);
        }
        n++;
    }
}
fourthTask();
// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }
    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;
}
fifthTask();