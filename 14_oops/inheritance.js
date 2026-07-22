class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME IS: ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A New Course is added by ${this.username}`)
    }
}

const chai = new Teacher("Pradeep" , "singh@gmail.com" , 54851)
console.log(chai.addCourse())

chai.logMe()
const Masalachai = new User("MasalaChai")
Masalachai.logMe()
console.log(chai instanceof Teacher)