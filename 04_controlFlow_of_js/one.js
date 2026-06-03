// const score = 200
// if(score > 100){
//     const power = "Fly"
//     console.log(`user power :${power}`);
    
// }


// short hand notation........

// const balance = 1000
// //if(balance > 500) console.log("text.."), console.log("text 2.....");
// ;
// if(balance < 500){
//     console.log("Less than 500");
    
// }
// else if(balance < 750){
//     console.log("Less than 750");
    
// }
// else if(balance < 900){
//     console.log("less than 900");
    
// }
// else{
//     console.log("Less than 1200");
    
// }

const isLoggedIn = true
const havedebitCard = true
const loggedInViaGoogle = false
const loggedInViaEmail = true

if(isLoggedIn && havedebitCard){ // and you know in AND operator both condition must be true then it gives true otherwise false...
   // console.log("Allow for shopping");
    
}
if(loggedInViaGoogle || loggedInViaEmail){
    //console.log("User logged in");
    
}


// +++++++++++++++ Switch Case ++++++++++++++++++++++++++++

// const month = 4
// switch (month) {
//     case 1:
//         console.log("Jan");
        
//         break;
//     case 2:
//         console.log("feb");
        
//         break;
//     case 3:
//         console.log("march");
        
//         break;
//     case 4:
//         console.log("april");
        
//         break;
//     case 5:
//         console.log("may");
        
//         break;

//     default:
//         console.log("no month match");
        
//         break;
// }

const month = "march"
switch (month) {
    case "jan":
        console.log("jan");
        
        break;
    case "feb":
        console.log("feb");
        
        break;
    case "march":
        console.log("march");
        
        break;
    case "april":
        console.log("april");
        
        break;

    default:
        console.log("no month match");
        
        break;
}


/// +++++++++++++ Truthy ++++++++++++++++++++++++

// falsy value ----

//false, 0, -0, BigInt 0n, null, undefined, NaN

// truthy value-----

// "0",  'false', " ", [], {}, function(){}

const userEmail = []

// if(userEmail){
//     console.log("user have email id");
    
// }
// else{
//     console.log("Don't have email id");
    
// }

if(userEmail.length === 0){
    console.log(" the array is empty");
    
}
else{
    console.log("Having some value..");
    
}

const obj1 = {}
if(Object.keys(obj1).length === 0){
    console.log("ther is no value");
    
}