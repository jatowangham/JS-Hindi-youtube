//primitive datatypes have 7 category:

// string
// number
// boolen
// null
// undefined
// symbol
// bigInt

const score = 100;
const scoreVal = 100.10;
const isLoggedIn = false;
const isLoggedOut = null;
let userEmail; //undefined
const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);

const bigNumber = 867498563928567892345867666n;
// console.log(typeof bigNumber, bigNumber)


// Reference datatype (non primitive)
// Array, Object, Functions
const arry = ["john", "matthew", "rohan"];
const obj = {
    name: "jato",
    age: 20
}
const myFunc = function(){
    console.log("hello world")
}

console.log(typeof arry)
console.log(typeof obj)
console.log(typeof myFunc)




// -------------------------stack and heap memory in JS----------------------------
//stack stores(primitive datatypes) Heap store(reference datatypes)  