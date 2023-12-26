import {compose} from "./compose-demo"

type DivideTwo = (x: number) => number
const divideTwo: DivideTwo = x => 2/x

console.log(divideTwo(8))
console.log(divideTwo(0))

type Increment = (x: number) => number
const increment: Increment = x => x+1

const composed = compose(increment,divideTwo)
console.log(composed(8))