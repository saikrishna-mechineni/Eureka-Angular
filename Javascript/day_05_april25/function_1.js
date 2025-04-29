function add(a,b){
    console.log(`Addition of ${a} and${b} is ${a + b}`)
}

add(2,3);

// function expression /anonymus
let sub = function(a,b){
    console.log(`sub of ${a} and ${b} is ${a - b}`)
}
sub(3,2)

//IIFE Immediately invoked function expression

(function(a,b){
    console.log(`Addition of ${a} and${b} is ${a + b}`);
})(4,5);

//arrow function
var div = (a ,b) => {
    console.log(`Division of ${a} and${b} is ${a / b}`)
}