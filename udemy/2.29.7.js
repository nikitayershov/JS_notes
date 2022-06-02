// Место для первой задачи
function calculateVolumeAndArea(a) {
    let square;
    let volume;
    if (typeof(a) !== 'number' || !Number.isInteger(a) || a < 0) {
        return `При вычислении произошла ошибка`;
    } else {
        square = a * a * 6;
        volume = a * a * a;
    return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
    }
}
console.log(calculateVolumeAndArea(5));

// Место для второй задачи
function getCoupeNumber(n) {
    let coupe;
    if (typeof(n) !== 'number' || !Number.isInteger(n) || n < 0 ){
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (n === 0 || n > 36) {
        return "Таких мест в вагоне не существует";
    } else {
        coupe = Math.ceil(n / 4);
        return coupe;
    }
}
console.log(getCoupeNumber(37));