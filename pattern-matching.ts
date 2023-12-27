import {Option, None, none, Some, some, isNone} from './Option'

// Option
type Match = <A,B>(onNone: () => B, onSome: (a: A) => B)
=> (x: Option<A>) => B

const match: Match = (onNone, onSome) => x => 
    isNone(x) ? onNone() : onSome(x.value)

const mayBeNum: Option<number> = some(12)
const result = match(
    () => `num does not exist`,
    (a: number) => `num is ${a}`
)(mayBeNum)

console.log(result)