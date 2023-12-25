// function sum_all(nums){
//     let result = 0
//     for (let i=0;i<nums.length;i++){
//         result += nums[i]
//     }
//     return result
// }

function normal_sum_all(xs: number[]): number{
    let result = 0

    for (let i=0; i < xs.length; i++){
        result += xs[i]
    }
    
    return result
}

console.log(normal_sum_all([1,2,3]))