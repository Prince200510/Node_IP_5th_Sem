function myfunction() {
    let name = 'World';
    anotherfunction(name);
}

function anotherfunction(name) {
    console.log("Hello " + name);
}

myfunction();

let a = function() {} //Anonymous function assigned to a variable
// function a () {} //Named function declaration

function add(num1, function2){
    return num1 + function2;
}

function function2() {
    return 2;
}

console.log(add(2, function2())); // Calling the add function with a number and the result of function2