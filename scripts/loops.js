
// WhileLoop
// let count = 0
// while (count > 10) {
//     console.log('Counting.. : ', count)
//     count += 1
// }

// let count = 0
// do {
//     console.log('Counting.. : ', count)
//         count += 1 
// } while (count >  10);

const maxTrial = 12
for (let ii = 0; ii < maxTrial; ii++) {

    if(ii === 7){
        // continue
        break
    }
    console.log('Counting.. : ', ii)
    
}


// ternary operators
// condtion ? true value : false value
const period = 1
const displayName = period > 1 ? 'days' : 'day'
console.log(' Arrival date ', displayName)

if (period > 1) {
    console.log(' Arrival date ', 'days')
} else {
    console.log(' Arrival date ', 'day')
    
}