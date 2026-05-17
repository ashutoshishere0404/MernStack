let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) );

function getAverageAge(users) {
    let sum = 0;
    for (let user of users) {
        sum += user.age;
    }
    return sum/users.length;
}