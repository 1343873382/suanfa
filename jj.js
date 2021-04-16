var largestNumber = function(nums) {
    let arr = nums.sort()
    console.log(nums);
    let max = ""
    let length = nums.length
    for (let i = 0; i < length; i++) {
        max = max + arr.pop()
        console.log(max);
    }

    return max
};
largestNumber([10, 2])