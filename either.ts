function divideTwoIfEven(num: number): number{
    if(num === 0){
        throw 'cannot divide by zero'
    }else if(num % 2 !== 0){
        throw 'num is not even'
    }else{
        return 2 / num
    }
}

console.log(divideTwoIfEven(8))
// console.log(divideTwoIfEven(3))// need to convert to total function

type Either<E,A> = Left<E> | Right<A>
interface Left<E> {
    _tag: 'Left'
    left: E
}
interface Right<A> {
    _tag: 'Right'
    right: A
}

const left = <E, A>(e: E): Either<E, A> => ({
    _tag: 'Left',
    left: e
})

const right = <E, A>(a: A): Either<E, A> =>({
    _tag: 'Right',
    right: a
})

function divideTwoIfEven2(num: number): Either<string, number>{
    if(num === 0){
        return left('cannot divide by zero')
    }else if(num % 2 !== 0){
        return left('num is not even')
    }else{
        return right(2/num)
    }
}

console.log(divideTwoIfEven2(8))
console.log(divideTwoIfEven2(0))
console.log(divideTwoIfEven2(3))