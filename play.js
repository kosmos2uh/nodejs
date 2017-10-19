// console.log("Hello world!");

// console.log(new Buffer(100));
// console.log(new Buffer(100);

// let user = 'Кевин';
// console.log(`Привет, ${user}!`);

var o = {
    val: 10,
    [Symbol("случайный")]: "Я - символ",
};
console.log(Object.getOwnPropertyNames(o));
console.log(Object.getOwnPropertySymbols(o));

