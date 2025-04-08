/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        nums[i] *= nums[i];
    }
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length-i; j++) {
            if(nums[j] > nums[j+1]) {
                temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
    return nums;
};