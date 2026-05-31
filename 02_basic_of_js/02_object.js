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

console.log(user1[mySym])
console.log(user1["full name"])
// we can also access the value of object using (.) ....>>


// equal k help se hm value ko overright krte h ....>>>

user1.address = "Hata-Kushinagar"
console.log(user1["address"])

// object k sath freez method lagane pr hm us value ko change nhi kr sakte....>>>

user1.age = 20
//Object.freeze(user1)
user1.age = 22
console.log(user1)

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
console.log(user1.greeting())
console.log(user1.greetingTwo())