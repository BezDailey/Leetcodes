var majorityElement = function(nums) {
    let max = 0;
    let maxValue = undefined;
    let current = nums[0];
    let count = 0;
    nums.sort();
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === current) {
            count += 1;
        } else {
            current = nums[i];
            count = 1;
        }
        
        if (count > max) {
            maxValue = nums[i];
            max = count;
        }
    }
    
    return maxValue?.toString();
};

console.log("Example 1 Output: " + majorityElement([3,2,3]))
console.log("Example 2 Output: " + majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log("Example 3 Output: " + majorityElement([6, 6, 6, 7, 7]));

