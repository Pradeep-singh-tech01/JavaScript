//let score = "33abc";  // this is not a number when we print this we found NaN in o/p:-
//let score = Undefined  => it's give output NaN;
//let score = Null  => it's give output 0;
let score = true //=> it's give output 1; and if false then 0;
console.log(typeof(score));

// I 
let valueInNumber = Number(score);
console.log(typeof(valueInNumber)); // number in the output
console.log(valueInNumber);

// Changing the number into boolean

//let isLoggedIn = 1
let isLoggedIn = "" //it is give in output
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof(booleanIsLoggedIn))
console.log(booleanIsLoggedIn)
console.log(isLoggedIn)


// change the number into string...
let somenumber = 33;
let string_number = String(somenumber);
console.log(string_number);
console.log(typeof(string_number));

// ---> Raference non Primitive:
// ---> object,aaray,function::::
const heros = ["Shaktiman" , "Naagraj", "Doga"]
let obj1 = {
    name:"Pradeep",
    age: 20,


}

console.log(typeof obj1)