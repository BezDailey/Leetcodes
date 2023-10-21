// This solution uses a hashSet time complexity: O(n) space complexity: O(1)
var removeDuplicates = function(nums) {
    let numSet = new Set();
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!numSet.has(nums[i])) {
            numSet.add(nums[i]);
            nums[index] = nums[i];
            index += 1;
        }
    }

    return index;
};

// This solution doesn't contain a hashSet. time complexity: O(1) space complexity: O(1)
var solution = function(nums) {
    let index = 1;

    for (let i = 1; i < nums.length; i++){
        if (nums[i] != nums[i - 1]) {
            nums[index] = nums[i]
            index += 1;
        }
    }

    return index;
};