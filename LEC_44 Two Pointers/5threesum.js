/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    nums.sort((x, y) => x-y);
    for(let x = 0; x < nums.length; x++) {
        let c = -nums[x];
        if(x != 0 && c == -nums[x-1])continue;
        let i = x + 1, j = nums.length - 1;
        while(i < j) {
            if(nums[i] + nums[j] == c) {
                result.push([-c, nums[i], nums[j]]);
                while(j > i && nums[j] == nums[j-1])j--;
                j--;
            }
            else if(nums[i] + nums[j] > c) {
                j--;
            }
            else i++;
        }
    }
    return result;
}; 
result = threeSum([1,2,3,-1,0,-2,-5]);
console.log(result);