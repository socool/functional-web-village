type Increment = (x: number) => number
const increment: Increment = x => x+1

console.log(increment(2))

type Tostring = (x: number) => string
const tostring: Tostring = x => `"${x}"`

console.log(tostring(2))

type IncrementThenToString = (x: number) => string
const increment_then_tostring: IncrementThenToString = x => tostring(increment(x))

console.log(increment_then_tostring(6))