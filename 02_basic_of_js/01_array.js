const myArr = [0,1,2,3,4,5,6,7]
const myArray = new Array(0,1,2,3,4)

// console.log(myArr)
// myArr.push(9)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)
// myArr.unshift(10)
// console.log(myArr)
// //console.log(myArr.shift())
// console.log(myArr.includes(4)) 
const newArr = myArr.join()  // it changes the array type into String
//console.log(typeof newArr)


const myAr1 = myArr.slice(1, 3)  // in slice method it extract the part of array and range does no includes
// console.log(myAr1)

const myAr2 = myArr.splice(1, 3) 
//console.log(myAr2)  // in this range is incllude and it manupulate the origional array...

const marvel_heros = ["Ironman","Thor","Spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

//marvel_heros.push(dc_heros)// this give output of array in array

//console.log(marvel_heros)  // o/p => [ 'Ironman', 'Thor', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

// so, for the joining of array we use concat method 


const all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros) // o/p => [ 'Ironman', 'Thor', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

//for storing the concat array we must assign a new variable


//console.log(Array.isArray("pradeep"))
//console.log(Array.from("Pradeep"))


// if there is the array in the array so we use flat method for print them in a singlr array

const the_array = [1,2,3,[4,5,6],7,[8,9,[10,100]]]
const another_array = the_array.flat(Infinity)
console.log(another_array)

// o/p =>> [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10,
//   100
// ]