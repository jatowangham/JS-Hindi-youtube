let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString);
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// const myCreatedDate = new Date(2025, 0 ,27);
const myCreatedDate = new Date("01-27-2025");
// console.log(myCreatedDate.toDateString());

const myDateandTime = new Date(2025, 0, 27, 5, 9);
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getDate());
// console.log(myCreatedDate.getTime());

// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
