// This is called string concatenation in which we add two strings....

const name = "pradeep"
const email = "google@gmail.com"
//console.log(`my name is ${name} and my email id is ${email}`)

// We can access the value of string with the help of index value....>

const gameName = new String('Pradeep-hc-com')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)

// there are two many method in proto type and we can use all of them using dot(.) 
// Here are some example of that methods ...>>>>

console.log(gameName.length)  // this method is used for checking the length..
console.log(gameName.toUpperCase()) // it change the all value into uppercase...
console.log(gameName.charAt(0)) // it gives the value which is on index 0..
console.log(gameName.indexOf('e')) // it gives index value of the entered value....

//SUBSTRING is used for extreacting some part of the string......>>>

const anotherName = gameName.substring(0, 4) // in this it only take 3 number and ignored the last one which is 4...
console.log(anotherName)

const anotherOne = gameName.slice(-8 ,5) // in the slice method there is one interesting things if we give negative number in input it reverse the value.....
console.log(anotherOne)


const nameWith = "    Pradeep   "; // this method is used for removing extra spaces.....
console.log(nameWith.trim());

const url = "https://pradeep%90/pradeesingh"  // replace methode used for replacing the value 
console.log(url.replace('%90', '___'))

// includes method is used for question and ansewer it gives answer in boolean formate...
console.log(url.includes('pradeepss'))

console.log(gameName.split('-')) // this method is provides array....or split the values...
