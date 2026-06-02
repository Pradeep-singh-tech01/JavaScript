let a = 10
const b = 20
var c = 30

console.log(a)
console.log(b)
console.log(c)


// Nested Scope......>>>>

function one(){
   const username = "Pradeep"
    function two(){
    const website = "google.com"
    console.log(username)
    }
    //console.log(website)
    two()
}
one()

if(true){
    const username = "pradeep"
    if(username === "pradeep"){
        const website = "google.com"
        console.log(username,website)

    }
    //console.log(website)
}
//console.log(username)


// +++++++++++++ Interesting ++++++++++++++++++++++++++++++++++
//console.log(addOne(5))
function addOne(num){
    return num + 1
}
console.log(addTwo(5))  // here we found error because we print the value before the declaration
const addTwo = function(num){
    return num + 2
}


