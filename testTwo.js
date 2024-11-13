console.log("Hello World");
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
}
