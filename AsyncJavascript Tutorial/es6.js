/* let person = {
    name: "Puneet",
    age: 21,
    gender: 'male',
    adult: true
}
/* cSpell:disable 
let { name: name, age, gender, adult } = person
console.log(name, age, gender, adult);
 */
//** Destructuring Objects -----------------------------
/* 
function save(city, pincode) {
    let address = {
        city,
        pincode
    }
    console.log(address);
}

save('delhi', 121009)

// object literal //  */
/* 
let salaries = [100, 1200, 1000, 2000, 2029, 100, 1200, 1000, 2000, 2029, 100, 1200, 1000, 2000, 2029]
let sum = 0;
for (salary of salaries) {
    sum += salary;
    console.log(salary);
}

console.log(`sum of salary is ${sum}`);  for of loop */
/* 
var data = require("./another.js")
console.log(data);  requiring files */