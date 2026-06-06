// for 

for(let i = 0; i < 10; i++){
    if (i == 5) {
        //console.log("5 is a best number ........")
    }
    //console.log(i)
}


for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop value${j} and outer loop value${i}`);
        //console.log(i + ' * '+ j + " = " + i*j);
        
    }
    
}

const myArray = ["flash", "Batman", "Supermam"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}

// using break keyword .....
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
       // console.log(`value 5 detected`);
        break;
    }
    //console.log(`the value of i is ${index}`)
}
// using continue keyword......>>>>>>>>
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`value 5 is detected`);
        continue;
        
    }
    console.log(`the value of i is ${index}`)
    
}