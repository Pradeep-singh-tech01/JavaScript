// A function is a reusable block of code that performs a specific task when called."


// function greet(){
//     console.log("Hello, Duniya")
// }
//greet();


// calling function with arguments ....>>>>
function sayMyName(name){
    console.log("Hello" , name)

}
//sayMyName("Pradeep")

// function with return value...>>>
function sum(num1,num2){
    return num1+num2
}
const ans = sum(10,20)
//console.log(ans)

function addTwoNum(number1,number2){
    console.log(number1+number2)
}
//addTwoNum(2,"A")



// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// const message = loginUserMessage()
//console.log(message) // undefined just logged in
// aur haan agr hm yha koi bhi argument pass nhi krte h toh output me undefined aata h....>>>>

function loginUserMessage(username){
    if(username === undefined){ // but most of the time we use if(!username) except if(username===undefined)
        console.log("Please enter user name..")  // agr hm chahe ki bina username k code aage run na ho toh hm 
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage())


// for adding multiple parameter in function we use spread operator.......>>>>

function cartCalculator(...num){
    return num
}
console.log(cartCalculator(200,500,1000,2000))

// how to pass object in a function

const obj1 = {
    userName : "Pradeep",
    price : 199
}

function handleObject(anyObject){
    return `username is ${anyObject.userName} and price is ${anyObject.price}` 
}
//console.log(handleObject(obj1))
console.log(handleObject({
    userName : "Pradeep",
    price : 300
}))




// Passing array in a Function......>>>>
const myArray = [1,2,3,6,8,99,1000,12555,58526]

function returnSecondValue(anyArray){
    return anyArray[7]
}
//console.log(returnSecondValue(myArray))

console.log(returnSecondValue([2,8,9,15,78,96,156,244,1258,996]))