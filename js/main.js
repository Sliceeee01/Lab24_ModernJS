// console.log("\n=== Деструктуризация массивов ===");
// const colors = ["red", "green", "blue"]; 
// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);
// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);
// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);


// console.log("Деструктуризация в параметрах");
// console.log("Деструктуризация объектов");
// const user = {
//     name: "Алиса",
//     age: 25,
//     city: "Москва",
// }
// function printUserOld({name, age, city}) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст: ${age}`);
//     console.log(`Город: ${city}`);
// }
// printUserOld(user);
// console.log();
// printUserOld(user);
// const userName = user.name;
// const userAge = user.age;
// console.log(userName, userAge);
// const {name, age , city } = user;
// console.log(name,age, city);
// const {name: fullName, age: years} = user;
// console.log(fullName, years);
// const {name: personName, country = "Россия"} = user;
// console.log(personName, country);

//6.5 Практика продукты
// console.log("Продукты");
// const product = {
//     name: "Картошка",
//     price: 119,
//     category: "Беларусский",
//     inStock: 12,
// }
// function printProduct({name,price, category, inStock}) {
//     console.log(`Имя: ${name}`);
//     console.log(`Цена: ${price}`);
//     console.log(`Категория: ${category}`);
//     console.log(`Наличие: ${inStock}`);
// }
// printProduct(product);
// console.log();
// printProduct(product);

//Spread
// console.log("Spread для массивов");
// const arr1 = [1, 2, 3];
// const arr2 = [3, 5, 6];
// const combined = [...arr1,...arr2];
// console.log("Объединенный массив: " , combined);
// const copy = [...arr1];
// console.log("Копия массива: ", copy);
// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив: " , extended);

// console.log("Spread для объектов");
// const person = {
//     name: "Иван",
//     age: 30,
// };
// const address = {
//     city: "Санкт-Петербург",
//     street: "Невский проспект",
// };
// const fullInfo = {...person, ...address};
// console.log("Полная информация: ", fullInfo);
// const personCopy = {...person};
// console.log("Копия объект: ", personCopy);
// const updated = {...person, age: 31, occupation : "Developer"};
// console.log("Обновленный объект: ", updated);


// console.log("Rest оператор");
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));
// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log ("Первое число: ", first);
// console.log ("Второе число: ", second);
// console.log ("Остальные числа:", rest);

// console.log("Практическое задание");
// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const combined = [...a1,...a2];
// console.log("Объединеный массив: ", combined );
// function findMax(...numbers) {
//      return numbers.reduce((total, num) => total + num, 0);
//  }

// export function greet(name){
//     return `Привет, ${name}!`;
// }
// export function add(a, b){
//     return a + b;
// }
// export function multiply(a,b){
//     return a * b;
// }
// export const PI = 3.14159;
// export default function sayHello() {
//     return "Привет из модуля utils!";
// }
// import {greet, add, PI} from "./until.js";
// console.log("Модули");
// console.log(greet("Алексей"));
// console.log("5 + 3 =", add(5, 3));
// console.log("Значение PI: ", PI);

// import { multiply as умножить} from "./until.js";
// console.log("4 * 7 =", умножить(4, 7));
// import * as Utils from "./until.js";
// console.log(Utils.greet("Диана"));
// console.log("Умножение:", Utils.multiply(3, 9));

//Практическое задание 8.5
