const score = 400
//console.log(score)

const salary = new Number(20000)
//console.log(salary)

// here are some methods based on Numbers

//console.log(salary.toString().length) // this shows length

//console.log(salary.toFixed(2)) // it fix values with decimal and we can say it also gives output in decimal


const anotherNum = 123.85
//console.log(anotherNum.toPrecision(3)) // it gives precision value....>>>

const longNumber = 10000000
//console.log(longNumber.toLocaleString()) // this make numbers readable....>> this use comma based on english language

//console.log(longNumber.toLocaleString('en-IN'))  // it put comma based on Indian formate....>>>



//++++++++++++++++++++++++++++++++++++ ***MATHS*** ++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4)) // this can chage the negative number into positive number onlyy....

console.log(Math.round(4.4))  // this gives round value only means if u give 4.4 then the output is 4...>>

console.log(Math.ceil(4.2))  // this is ceiling method in which the value is 4.1,4.2... or something it gives 5 in output

console.log(Math.floor(4.8)) // this give only low number if u give 4.8,4.9.. or something it gives only 4...

console.log(Math.random())  // it gives  values between 0 to 1..

let max = 20
let min = 10
console.log(Math.floor(Math.random()*(max-min+1))+min)