// new Object  -> Object.prototype

const objA = {
    chaveA: 'A'    
    // __protp__: Object.prototype
}

const objB = {
    chaveB: 'B'    
    // __protp__: objA
}

const objC = new Object()
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objC.chaveA)