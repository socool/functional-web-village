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

type AppendAll = (xs: List<string>) => string
const appendAll: AppendAll = 
    matchL(
        () => '',
        (head: string, tail: List<string>) => head + appendAll(tail)
    )
console.log(appendAll(cons('hello',cons(' ',cons('world!',nil)))))




interface Magma<A> {
    concat: (x: A, y: A) => A
}

interface Semigroup<A> extends Magma<A> {}

const addSemigroup: Semigroup<number> = {concat: (x,y) => x + y}
const multiplySemigroup: Semigroup<number> = {concat: (x,y) => x * y}
const appendSemigroup: Semigroup<string> = {concat: (x,y)=> x.concat(y)}

const concatAll = 
    <A>(s: Semigroup<A>)=>
    (startWith: A)=>
    (xs: List<A>): A=>
        matchL(
            () => startWith,
            (head: A, tail: List<A>) => s.concat(head, concatAll(s)(startWith)(tail))
        )(xs)
console.log(concatAll(addSemigroup)(0)(cons(2,cons(3,cons(4,nil)))))
console.log(concatAll(multiplySemigroup)(1)(cons(2,cons(3,cons(4,nil)))))
console.log(concatAll(appendSemigroup)('')(cons('hello',cons(' ', cons('world!',nil)))))

