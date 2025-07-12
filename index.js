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

let row = 5;
for(let i = 1; i <= row; i++){
    console.log("* ".repeat(i));
}

let rows = 5;
for(let i = 1; i <= rows; i++){
    let spaces = " ".repeat(rows - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars);
}


// setTimeout(() => {
//     console.log("123");
// }, 2000);

// console.log("12345");

// function votingBooth(age, parameters, callbackFunction) {
//     console.log('A person has entered the voting centre.');
 
//     const isError = age < 18;
//     const errorMessage = isError ? new Error('The person is not allowed to vote') : undefined;
 
//     setTimeout(() => callbackFunction(errorMessage, parameters, function (parameters, callbackFunction) {
//         console.log('Indelible ink application process started.');
 
//         setTimeout(() => callbackFunction(parameters, function (parameters, callbackFunction) {
//             console.log('A person has started the process of punching in a vote in EVM.');
        
//             setTimeout(() => callbackFunction(parameters, function (parameters, callbackFunction) {
//                 console.log('The person has started the process of verifying the voter slip in VVPAT machine.');
            
//                 setTimeout(() => callbackFunction(parameters), 20);
            
//                 console.log('The person has completed the process of verifying the voter slip in VVPAT machine.');
//             }), 20);
        
//             console.log('A person has completed the process of punching in a vote in EVM.');
//         }), 20);
 
//         console.log('Indelible ink application process completed.');
//     }), 20);
 
//     console.log('A person has exited the voting centre.');
// }
 
// votingBooth(20, 'The person has successfully voted and', function (err, parameters, callbackFunction) {
//     if (err) {
//         console.error(err.message);
//         return;
//     }
 
//     setTimeout(() => callbackFunction(parameters, function (parameters, callbackFunction) {
//         console.log('A person has started the process of punching in a vote in EVM.');
    
//         setTimeout(() => callbackFunction(parameters, function (parameters) {
//             console.log(parameters + ' has successfully completed the final step of submitting the vote.');
            
//         }), 20);
    
//         console.log('A person has completed the process of punching in a vote in EVM.');
//     }), 20);
// });

Promise.resolve('Hello World')
.then((message) => {
    console.log(message);
    return 'Promise';
})
.then((err) => {
    console.log(err);
    return 'error hai bhai';
})

let addition = (num1, num2) => new Promise(
    (resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject(new Error('Its not a number'));
        } else {
            resolve(num1 + num2);
        }
    }
)

addition(2, 3)
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});