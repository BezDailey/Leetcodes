/*

Algorithm:
create ptr = 0;
create last = arr.length - 1;

// Case: arr.length == 1:
    if arr[0] is equal to val:
        return 0
    else:
        reurn 1;

while ptr is less than last ptr:
    if the element is the value to be removed
        if the last element in the arr is the value:
            deincrement the last element ptr by one
        swap with the last element in the arr
    increment ptr
return last;

Example 1:
Input : arr = [3, 2, 2, 3], val = 3
Output: 2, nums = [2, 2, 2, 2]

Iteration 1:
ptr = 0;
last = 2;
arr  = [2, 2, 3, 3]

Iteration 2:
ptr = 1;
last = 2;
arr = [2, 2, 3, 3];

Iteration 3:
ptr = 2;
last = 2;
arr = [2, 2, 3, 3,];
return 3;

*/

var removeElement = function(nums, val) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[index] = nums[i];
            index++;
        }
    }

    return index;
};

removeElement([3,2,2,3], 3);