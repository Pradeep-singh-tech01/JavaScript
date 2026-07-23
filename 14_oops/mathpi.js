const value = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(value)

console.log(Math.PI)

const chai = {
    name:'ginger chai',
    price:250,
    isAvailable: true
}
const tea = Object.getOwnPropertyDescriptor(chai, "name ")
console.log(tea)

Object.defineProperty(chai, "name",{
    writable: false,
  enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
