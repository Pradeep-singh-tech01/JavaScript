// object literals


const mySym = Symbol("keys1")

const user1 = {
    name : "pradeep",
    // symbol ko declare krne k liye hm [] ke ander variable likhke value assign krte h
    [mySym] : "MYkeys2",
    "full name" : "pradeep singh",
    age : 20,
    address : "Gorakhpur",
    email : "pradeep@gmail.com",
    isLoggedIn : true

}

console.log(user1)

//console.log(user1[mySym])
//console.log(user1["full name"])
// we can also access the value of object using (.) ....>>


// equal k help se hm value ko overright krte h ....>>>

user1.address = "Hata-Kushinagar"
console.log(user1["address"])

// object k sath freez method lagane pr hm us value ko change nhi kr sakte....>>>

user1.age = 20
//Object.freeze(user1)
user1.age = 22
//console.log(user1)

// o/p ......>>>>
// {
//   name: 'pradeep',
//   'full name': 'pradeep singh',
//   age: 20,
//   address: 'Hata-Kushinagar',
//   email: 'pradeep@gmail.com',
//   isLoggedIn: true,
//   [Symbol(keys1)]: 'MYkeys2'
// }


user1.greeting = function(){
    console.log("Hello user1 ")
}
user1.greetingTwo = function(){
    console.log('Hello js user, ${this.name}')
}
// console.log(user1.greeting())
// console.log(user1.greetingTwo())



// ++++++++++++++++++++ Another part of Object +++++++++++++++++++++++

// Assigning a object 
const tinderUser = new Object()
//console.log(tinderUser)

tinderUser.name = "Samm"
tinderUser.age = 20
tinderUser.isLoggedIn = false

//console.log(tinderUser)

// for joinning two object we use Object.Assign.....>>>>

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = Object.assign({},obj1, obj2)
//console.log(obj3)

// o/p => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// but = the most of the time in js we use spread methood

const newObj3 = {...obj1, ...obj2}
console.log(obj3)


// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// Object Destructuring....

const course = {
    courseName : "js Complete",
    price : 999,
    courseInstrucor : "Hitesh"
}

const {courseInstrucor: Instructor } = course
console.log(Instructor)