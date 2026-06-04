// for 

for(let i = 0; i < 10; i++){
    if (i == 5) {
        //console.log("5 is a best number ........")
    }
    //console.log(i)
}


for (let i = 0; i <= 10; i++) {
    console.log(`outer loop ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop value${j} and outer loop value${i}`);
        console.log(i + ' * '+ j + " = " + i*j);
        
    }
    
}