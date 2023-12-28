function normal_sum(a:number,b:number){
    return a + b
}
// console.log(normal_sum(1,2))

// function sum2(a:number){
//     return function(b:number){
//         return a + b
//     }
// }

type Sum = (a: number) => (b: number) => number
const f_sum: Sum = a => b => a + b

// console.log(f_sum(1)(2))

type Inc = (x: number) => number
const inc: Inc = f_sum(1)
const inc2: Inc = a => f_sum(a)(1)

// console.log(inc(5),":",inc2(5))

type Dec = (x: number) => number
const dec: Dec = f_sum(-1)

// console.log(dec(6))

type CurryNum = (f: (a: number, b: number) => number)
    => (a: number)
    => (b: number)
    => number

const curryNum:CurryNum = f => a => b => f(a,b)

const f_sum2 = curryNum(normal_sum)

// console.log(f_sum2(1)(2))

type CurryAny = <A,B,Z>(f: (a:A, b:B) => Z)
    => (a: A)
    => (b: B)
    => Z

const curryAny: CurryAny = f => a => b => f(a,b)

const sum2 = curryAny(normal_sum)

// console.log(sum2(1)(3))