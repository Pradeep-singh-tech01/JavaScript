// ES6


// class User {

//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return`${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("pradeep", "pradeep@gmail.com", "45415477")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername())



// behind the scene

function User1(username, email, password){
    this.Username = username;
    this.email = email;
    this.password = password


}

User1.prototype.encryptPassword=function(){
 return`${this.password}abc`
}

User1.prototype.changeUsername=function(){
 return `${this.username.toUpperCase()}`
}

const tea = new User1("pradeep", "pradeep@gmail.com", 55484)
console.log(tea.encryptPassword())