function SetUsername(username){
    this.username = username
}

function CreatUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email;
    this.password = password


}

const chai = new CreatUser("Pradeep", "pradeep@gmail.com", "prade285")
console.log(chai)


// call jo hai hamara current execution comntext dusre ko pass kr deta h......