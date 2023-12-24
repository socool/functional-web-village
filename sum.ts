// const sum = (val1:number) =>{
//     return (val2:number) =>{
//         return val1 + val2
//     }
// }
// console.log(sum(5))

const sum = (val1:number) => (val2:number) => val1 + val2
console.log(sum(5)(2))

const increase = sum(1)
console.log(increase(2))    //3
console.log(increase(5))    //6

const sumWithTen = sum(10)
console.log(sumWithTen(5)) //10
console.log(sumWithTen(-5)) // 5