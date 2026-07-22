let myHero = ["thor", 'spiderman']

let heroPower = {
    thor: "hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }

}

Object.prototype.pradeep = function(){
    console.log(`pradeep is present in all object`)
}

//myHero.pradeep()


// const user = {
//     name:'Pradeep',
//     email:'chai@google.com'
// }

// const teacher = {
//     makeVideo: true
// }

// const taechingSupport = {
//     isAvailable: false
// }

// // const TASupport = {
// //     makeAssignment:'JS assignment',
// //     fullTime = true,
// //     __proto__:taechingSupport
// // }

// teacher.__proto__= user 


// // MoDern Syntax 

// Object.setPrototypeOf(taechingSupport, teacher)



const anotherUsername = "ChaiAurCode              "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.trueLength()