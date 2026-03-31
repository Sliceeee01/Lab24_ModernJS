// console.log("\n=== Деструктуризация массивов ===");
// const colors = ["red", "green", "blue"]; 
// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);
// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);
// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);


console.log("Деструктуризация в параметрах");
console.log("Деструктуризация объектов");
const user = {
    name: "Алиса",
    age: 25,
    city: "Москва",
}
const userName = user.name;
const userAge = user.age;
console.log(userName, userAge);
const {name, age , city } = user;
console.log(name,age, city);
const {name: fullName, age: years} = user;
console.log(fullName, years);
const {name: personName, country = "Россия"} = user;
console.log(personName, country);