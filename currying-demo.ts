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
const f_sum: Sum = a => b => a + b

console.log(f_sum(1)(2))

type Inc = (x: number) => number
const inc: Inc = f_sum(1)
const inc2: Inc = a => f_sum(a)(1)

console.log(inc(5),":",inc2(5))

type Dec = (x: number) => number
const dec: Dec = f_sum(-1)

console.log(dec(6))

type Curry2 = (f: (a: number, b: number) => number)
    => (a: number)
    => (b: number)
    => number
    
const curry2:Curry2 = f => a => b => f(a,b)

const f_sum2 = curry2(normal_sum)

console.log(f_sum2(1)(2))