// for of

const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
    
}

const greetings = "Hello World"
for (const greet of greetings) {
    //console.log(greet);
    
}

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('NL', "Nepal")
//console.log(map)

for (const [key ,value] of map) {
    //console.log(key ,':-', value)
    
}

// thiss for of loop is not work with Objects so we use for in loop.......>>>>>

const myObject = {
    'js': "javaScript",
    'cpp': "c++",
    'rb': "ruby",
    'swift':"swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`)
}


const programming = ["javascript","java","cpp","python","c language"]

for (const key in programming) {
    
    //console.log(programming[key])
}



// for each..............>>>>>>>>>>c

const coding = ["java script", "java","python", "cpp","ruby"]

coding.forEach(function(value){
   // console.log(value);
    
})
coding.forEach((item)=>{
    //console.log(item);
    
})

// function printMe(item) {
//     console.log(item);
    
// }
// coding.forEach(printMe)/

coding.forEach((item, index, arr)=>{
//console.log(item, index, arr);

})


const myCoding = [
    {
        languageName: "JAVAScript",
        languageFileName: 'js'
    },
    {
        languageName:"ruby",
        languageFileName: 'rb'
    },
    {
        languageName: "c++",
        languageFileName: 'cpp'
    }
]

myCoding.forEach((item)=>{
  //  console.log(item.languageName)
    
})


// filter loops............>>>>>>>>>

// const myNums = [1,2,3,4,5,6,7,8,9,10]

//  const newNums = myNums.filter((nums) => nums > 5)
//  //console.log(newNums)

//  // another type of callback function for filter loops.....

//  const anotherNums = [1,2,3,4,5,6,7,8,9,10]

//  const sercondNums = anotherNums.filter((nums) => {
//     return nums > 4
//  })
//  console.log(newNums)


// map loop ............>>>>>>>>>
const myNums = [1,2,3,4,5,6,7,8,9,10]
const anotherNums = myNums.map((nums) => nums + 10)
//console.log(anotherNums)

// reduse for loop..........>>>>>>>


const myAnotherNums = [1,2,3]
const totalNums = myAnotherNums.reduce((acc, currval) => {
    console.log(`ACCUMULATOR: ${acc} ,CURRENTVALUE: ${currval} `)
    return acc + currval

},0)
console.log(totalNums)



const courses = [
    {
        courseName : 'js course ',
        coursePrize: 2999
    },
    {
        courseName : 'py course ',
        coursePrize: 999
    },
    {
        courseName : 'mobile development course ',
        coursePrize: 5999
    },
    {
        courseName : 'data science course ',
        coursePrize: 12999
    }
]

const totalprize = courses.reduce((acc , courseprize) => acc+courseprize.coursePrize ,0 )
console.log(totalprize)