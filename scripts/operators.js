
// Arithmetic operator
const sum = 4 + 67
const subt = 4 - 67
const mult = 4 * 67
const div = 4 / 67
const modulo = 5 % 2

console.log( sum, subt, mult, div, modulo)

// Comparison operators
const gt = 5 > 4
const lt = 5 < 4
const lteq = 5 <= 4
const gteq = 5 >= 4
const eq = 4 == '4'
const neq = 4 !== 4
console.log(gt, lt, lteq, gteq, eq, neq)

// Logical operators

// and 
console.log(true &&  true)
console.log(false &&  true)
console.log(true &&  false)
console.log(false &&  false)
console.log('-----------------------------')
// or
console.log(true ||  true)
console.log(false ||  true)
console.log(true ||  false)
console.log(false ||  false)

const score = 60

const isA = score >= 70
const isB = score >= 60 && score < 70
const isC = score >= 50 && score < 60
console.log(isA, isB, isC) 