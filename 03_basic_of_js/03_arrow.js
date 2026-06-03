
const user = {
    username : "Pradeep",
    price : 999,

    welocomeMessage : function(){
        console.log(`${this.username} , welcome to the website`)
    }

}
user.welocomeMessage()
user.username = "Rohit"
user.welocomeMessage()


// if we use this in arrow function then we get empty object.....>>>>>
const addTwoNum = (num1, num2)=>{
 return num1 + num2
}
const ans = addTwoNum(5,6)
//console.log(ans)

// Implicit arrow function.....>>>>
//const addNum = (num1,num2)=> num1+num2
const addNum = (num1,num2)=>({username :"Pradeep"})
//  if we use {} then we write return  
console.log(addTwoNum());



// ++++++++++++++++++++++++++++ Immediatly Invoked Function Expression +++++++++++++++++++++++ IIFE

// global scope ke pollution se bachne ke liye hm IIFE ka use krte h..
// jaha () ye function declaration ke liye use hota h aur () function execution k liye use hota h...

(function chai(){
    console.log("DB connected");
})();