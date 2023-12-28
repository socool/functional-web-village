import {Option, None, none, Some, some, isNone} from './Option'
import {Either, Left, left, Right, right, isLeft} from './either'
import {List, Nil, nil, Cons, cons, isNil} from './list'
import {match as matchTs} from 'ts-pattern'
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

// console.log(result1)

// Either
type MatchEither = <E, A, B> (onLeft: (e: E)=> B, onRight: (a: A) => B)
    => (x: Either<E, A>) => B

const matchE: MatchEither = (onLeft, onRight) => x =>
    isLeft(x) ? onLeft(x.left) : onRight(x.right)

const errorOrNum: Either<string, number> = right(12)
const result2 = matchE(
    (e: string) => `Error happened: ${e}`,
    (a: number) => `num is ${a}`
)(errorOrNum)

// console.log(result2)

// List
type MatchList = <A, B>(onNil: () => B, onCons: (head: A, tail: List<A>) => B)
    => (xs: List<A>) => B

export const matchL: MatchList = (onNil, onCons) => xs => 
    isNil(xs) ? onNil() : onCons(xs.head, xs.tail)

// const myList: List<number> = cons(1, cons(2, cons(3, nil)))
const myList: List<number> = nil
const result3 = matchL(
    () => `list is empty`,
    (head: number, tail: List<number>) => `head is ${head}`
)(myList)

// console.log(result3)

const myList2: List<number> = cons(1, cons(2, cons(3, nil)))
const result4 = matchTs(myList2)
    .with({_tag: 'Nil'},() => `list is empty`)
    .with({_tag: 'Cons'},({head, tail}: Cons<number>) => `head is ${head}`)
    .exhaustive()

// console.log(result4)