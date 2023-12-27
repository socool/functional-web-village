import {Option, None, none, Some, some, isNone} from './Option.ts'

// Option
type Match = <A,B>(onNone: () => B, onSome: (a: A) => B)
=> (x: Option<A>) => B

