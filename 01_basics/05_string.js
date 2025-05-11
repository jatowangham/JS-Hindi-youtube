const name = "jato";
const age = 30;
// console.log(`my name is ${name} my age ${age}`)

const gameName = new String("wangham-zone-com")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("h"));

const newString = gameName.substring(0,4);
console.log(newString)

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const firstName = "    jato     ";
console.log(firstName.length);
console.log(firstName.trim().length);

const url = "https://jato.com/jato%20wangham";
console.log(url.replace("%20", "-"));
console.log(url.includes("wangham"));

console.log(gameName.split("-"))