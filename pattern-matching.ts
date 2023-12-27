import {Option, None, none, Some, some, isNone} from './Option'
import {Either, Left, left, Right, right, isLeft} from './either'
// Option
type MatchOption = <A,B>(onNone: () => B, onSome: (a: A) => B)
=> (x: Option<A>) => B

const match: MatchOption = (onNone, onSome) => x => 
    isNone(x) ? onNone() : onSome(x.value)

const mayBeNum: Option<number> = some(12)
const result1 = match(
    () => `num does not exist`,
    (a: number) => `num is ${a}`
)(mayBeNum)

console.log(result1)

// Either
// type eMatch 