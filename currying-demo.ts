function normal_sum(a:number,b:number){
    return a + b
}
console.log(normal_sum(1,2))

// function sum2(a:number){
//     return function(b:number){
//         return a + b
//     }
// }

type Sum = (a: number) => (b: number) => number
const sum2: Sum = a => b => a+b

console.log(sum2(1)(2))

const inc: Increment = sum2(1)


console.log(sum2(1)(2))