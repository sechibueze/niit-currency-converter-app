console.log('Yearhhh')

// const arr = new Array()
// const arr = ['']
// let students = ['Hasan', 'Sam',2, [08,67], 'Bolaji', 'Kike', 'Kelvin', 'Seun']
// const sam = students[1]
// students[3] = 'Victor'
// // const 
// console.log('students --', students)
let students = ['Hasan', 'Sam', 'Bolaji', 'Kike', 'Kelvin', 'Seun']

// for (let index = 0; index < students.length; index++) {
//     const element = students[index];
//     console.log(element)
// }
// const cb = (element, ii, arr) => {
//     console.log(element)
//     console.log(ii)
//     console.log(arr)
// }
// students.forEach(cb);
const prices = [11.23, 6.99, 7.55, .99]
// const lowPrices = prices.map(price => price > 5)
// const lowPrices = prices.filter(price => price > 5)
const lowPrices = prices.find(price => price === 5)
console.log(lowPrices)


