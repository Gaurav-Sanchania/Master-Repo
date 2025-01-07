// JS is a single threaded synchronous language but use of callback functions, promises and async/await makes it asynchronous
// it means it can execute only one statement at a time

console.log("Hello JavaScript");

// Asynchronous code

// setTimeout(callback function, time in ms) || for adding delay
setTimeout(() => {
    console.log("This is an asynchronous code");
}, 2000);
// microtask queue
// fetch("https://dummyjson.com/products/1")
//     .then(res => res.json())
//     .then(json => console.log(json))
// console.log("Learning JavaScript");

// call back function: function passed as an argument to another function
// callback function is executed after the completion of the parent function
function createMessage(name, callback) {
    const mess = `Hello ${name}`;
    callback(mess);
}
function displayMessage(message) {
    console.log(message);
}
const message = createMessage('John', displayMessage);
// pyramid of doom: multiple nested callbacks
// callback hell: multiple nested callbacks
// solution: promises and async/await

// Promises: object that represents the eventual completion or failure of an asynchronous operation
const promise = new Promise(function(resolve, reject){
    // some code taking time
    let promiseResult;
    setTimeout(() => {
        promiseResult = false;
        if(promiseResult) {
            resolve("Successful");
        } else {
            reject("Failed");
        }
    }, 1000);
});
console.log("Promise", promise);
promise.then(message => console.log("Promise resolved: " + message));
promise.catch(message => console.log("Promise rejected: " + message));