// PRIMITIVE DATATYPE  => this is also known as call by value kyuki jb hm inke kahi copy krte h to inke memory ka reference add. mhi jata value hi chali jati h aur koi bhi changes us copy value me hi hoti h....

// String
//Boolean
//Number
//Null
//Umdefined
//Bigint
//Symbol

// NON PRIMITIVE DATATYPE  (call by reference)  => kyuki yha hm data ka memory reference dete h....

//Array
//Objects
//Function



// memory in JAVASCRIPT.......>>>>>


// Stack(Primitive data type)  & Heap(Non-Primitive data type)

let myYouTubeName = "Jai shree Ram"
let anotherName = myYouTubeName
anotherName = "Jai Hanuman"
console.log(myYouTubeName)
console.log(anotherName)

// in this type hm jo bhi data h uska actual value nhi dete uska copy dete h jisse ki jo bhi changes hoti h wo actual me nhi hoti..


let userOne = {
    email:"google@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "Pradeep@gmail.com"

console.log(userOne)

// in heap hm actual value ki copy na deke uska actual value hi de dete h jisse ki ki sare changes actual value me ho jati h....this is also known as call by reference...
