// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let value of arr) {
        result.push(value);
    }
    console.log(result);
    // Не трогаем
    return result;
}
firstTask();
// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        } else {
            data[i] = data[i] * 2;
        }
    }
    console.log(data);
    // Не трогаем
    return data;
}
secondTask();
// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    let result = [];

    // Пишем решение вот тут

    result = data.reverse();
    console.log(result);
    // Не трогаем
    return result;
}
thirdTask();