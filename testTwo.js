/*console.log("Hello World");
let number = 2;
function add(a, b) {
    return a + b;
}
let summary = add(number, number);
console.log(summary);
function exponent(a, b, c) {
    return (a + b) ** c;
}
let exponentResult = exponent(number, number, number);
if (exponentResult % 2 === 0) {
    console.log(exponentResult + " Число четное");
}
else {
    console.log(exponentResult + " Число нечетное");
}*/

let array = [];
for (let i = 0; i < 301; i++) {
    array.push(i);
}
for (let i=0; i < 6; i++) {
const randomIndexOne = Math.floor(Math.random() * (array.length - 1));
const randomIndexTwo = Math.floor(Math.random() * (array.length - 1));
const number1 = array[randomIndexOne];
const number2 = array[randomIndexTwo];
console.log("Первое число: " + number1, "Второе число: " + number2);
function exponent(a, b, c) {
    return (a + b) ** c;
}
let exponentResult = exponent(number1, number2, i);
if (exponentResult % 2 === 0) {
    console.log("Итоговое значение четное: " + exponentResult);
} else {
    console.log("Итоговое значение нечетное: " + exponentResult);
}
let n = exponentResult;
const isPowerOfTwo = n => {
    if (n > 0 && (n & (n - 1)) === 0) {
        let power = 0;
        let value = 1;
        while (value < n) {
            value *= 2;
            power++;
        }
        return `Число ${n} является степенью 2: 2^${power}`;
    }
    return `Число ${n} не является степенью 2.`;
};
console.log(isPowerOfTwo(n));
}