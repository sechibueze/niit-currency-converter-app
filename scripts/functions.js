
// IIFEs 
(function sqrRoot() {
    console.log('hey')
})()
// / const squareNumber = (x) =>  x * x

// const squareNumber = (x) => {
//     return x * x
// }
// const sqr = squareNumber(8)

// console.log('Square number ', sqr)
addNumbers(15, 82)
addNumbers(1, 82)
addNumbers(15, 2)
const area = calculateArea(12, 4)
console.log('area ', area)
calculateArea(12)

function addNumbers(x, y) {
    console.log('Working in a function...')
    console.log(x + y + 0.5)
}

function calculateArea(l, w = 0) {
    console.log(w !== 0 ? l * w : l * l) 
}
function calculateArea(l, w = 0) {
 const result  = w !== 0 ? l * w : l * l
    return result
}
