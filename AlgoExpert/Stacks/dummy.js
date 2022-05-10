
function dummy (nums) {
    const len  = nums.length;
    console.log(len);
    let totalSum = 0;
    if(len <= 2) {
        totalSum += nums[0];
        return totalSum;
    }
    for(let i = 0; i < len; i++) {
        if((i % 2) == 0) {
            totalSum += nums[i];
        }
    }
    return totalSum;
}

const nums = [1, 2];

console.log(dummy(nums))