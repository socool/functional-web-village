import {Monoid} from './magma'

interface Group<A> extends Monoid<A>{
    concat: (x: A, y:A) => A
    empty: A,
    inverse: (a: A) => A
}

const addGroup: Group<number> = {
    concat: (x,y) => x+y,
    empty: 0,
    inverse: a=> -a
}

const walletBalance = addGroup.concat(
    addGroup.empty,
    addGroup.concat(80,
        addGroup.concat(20,
            addGroup.inverse(10))))
console.log(walletBalance)

