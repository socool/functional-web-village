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
console.log(divideTwoIfEven(3))