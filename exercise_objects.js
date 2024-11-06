// ;"use strict"

// const object = {
//     message : 'Hello,World!',
//     getMessage () {
//         const message = 'Hello, Earth!';
//         return this.message;
//     }
// }
// console.log(object.getMessage());
// will print 'Hello, World!'



// function Pet (name) {
//     this.name = name;
//     this.getName = () => this.name;
// };
// const cat = new Pet('Fluffy');
// console.log(cat.getName());     // Fluffy
// const { getName } = cat;
// console.log(getName());        //Fluffy



// const object = {
//     message : 'Hello, World!',
//
//     logMessage () {
//         console.log(this.message);
//     }
//  };

//setTimeout (object.logMessage, 1000);     //undefined



// const object = {
// mesage: 'Hello, World!'
// };
// function logMessage () {
//     console.log ('Hello, World!');
// }
// logMessage();



// const object = {
//     who:  'World',
//     greet() {
//         return `Hello, ${this.who}!`
//            },
//     farewell: () => {
//         return `Goodbye, ${this.who}!`;
//     }
// };
//
// console.log(object.greet());         //hello world
// console.log(object.farewell());      // goodbye undefined




// var length = 4;
// function callback() {
//     console.log(this.length);
// };
//
// const object = {
//     length: 5,
//     method(callback){
//         callback();
//     }
// };
// object.method(callback, 1, 2);   //undefined


//object.method(callback, 1, 2);      //3