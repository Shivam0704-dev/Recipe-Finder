/* Create a faulty calculator using JavaScript

This faluty calculator does following:
1. It takes two number as input from the user
2. It performs wrong operations as following"

+ --> -
* --> +
- --> /
/ --> **

It performs wrong operation 10% of the times
*/

let random = Math.random()
let a = prompt("Enter first number");
console.log(random);
let c = prompt("Enter operation");
let b = prompt("Enter second number number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > 0.1) {
    // perform correct calculation
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    //perform wrong calculation
    c = obj[c]
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`);
}