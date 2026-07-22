// const user = {
//     username: "Pradeep",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user detail from database");
//         console.log(`username: ${this.username}`)
//         console.log(this)
//     }
// }
//console.log(user.username)
//console.log(user.getUserDetails());

function user(username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}
const userOne =new user("Pradeep", 12, true)
const userTwo = new user("Rohit", 16,false)
console.log(userOne)
console.log(userTwo)

// when we use new keyword then one empty OBJECT will create.
// a constructor function will called cause of new keyword .
//  all the argument will injected in this keyword..
// and in the four step after calling the function wo sb hme mil jate h 
