import {List, cons, nil} from './list'
import {matchL} from './pattern-matching'

type AddAll = (xs: List<number> )=> number
const addAll: AddAll = 
    matchL(
        () => 0,
        (head:number, tail: List<number>) => head + addAll(tail)
    )

console.log(addAll(cons(2,cons(3,cons(4,nil)))))

type MultiplyAll = (xs: List<number>) => number
const multiplyAll: MultiplyAll = 
    matchL(
        () => 1,
        (head: number, tail: List<number>) => head * multiplyAll(tail)
    )
console.log(multiplyAll(cons(2,cons(3,cons(4,nil)))))