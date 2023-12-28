import {List, cons, nil} from './list'
import {matchL} from './pattern-matching'

type AddAll = (xs: List<number> )=> number
const addAll: AddAll = 
    matchL(
        () => 0,
        (head:number, tail: List<number>) => head + addAll(tail)
    )

console.log(addAll(cons(2,cons(3,cons(4,nil)))))