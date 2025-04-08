/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let i = 0, j = nums.length-1;
    let result = Array(nums.length);
    k = j;
    while(i <= j) {
        let x = nums[i] * nums[i];
        let y = nums[j] * nums[j];
        if(x < y) {
            result[k--] = y;
            j--;
        }
        else {
            result[k--] = x;
            i++;
        }
    }
    return result;
};