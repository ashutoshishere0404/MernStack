let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

let salaries = {
    john:100,
    sam:1000,
    elon:1500,
}
function sum(salaries) {
    let total = 0;
    for (key in salaries) {
        total += salaries[key];
    }
    return total;
}
alert(sum(salaries));