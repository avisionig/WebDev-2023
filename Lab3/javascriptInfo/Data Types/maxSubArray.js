function getMaxSubSum(arr) {
    let maxi = 0;
    let temp = 0;

    for (let i of arr) {
        temp += i;
        maxi = Math.max(maxi, temp);
        if (temp < 0) temp = 0;
    }
    return maxi;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) );
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) );
console.log( getMaxSubSum([-2, -1, 1, 2]) );
console.log( getMaxSubSum([100, -9, 2, -3, 5]) );
console.log( getMaxSubSum([1, 2, 3]) );
console.log( getMaxSubSum([-1, -2, -3]) );