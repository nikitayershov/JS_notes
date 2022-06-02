function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }
    if (num === 1) {
        return "0";
    } else if (num === 1) {
        return "0 1";
    } else {
        let arr = [0, 1];
        for (let i = 2; i < num; i++) {
            arr[i] = arr[i-1] + arr[i-2];
        }
        return arr.join(" ");
    }
}
console.log(fib(1000));