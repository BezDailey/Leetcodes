/**
  2535. Difference Between Element Sum and Digit Sum of an Array
  You are given a positive integer array nums.

  The element sum is the sum of all the elements in nums.
  The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
  Return the absolute difference between the element sum and digit sum of nums.

  Note that the absolute difference between two integers x and y is defined as |x - y|.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let elementSum = 0;
  let digitSum = 0;

  for (index in nums) {
    elementSum += nums[index];
    nums[index] = nums[index].toString();
    for (let i = 0; i < nums[index].length; i++) {
      digitSum += parseInt(nums[index].charAt(i));
    }
  }

  return Math.abs(elementSum - digitSum);
};

var getDigitSum = (num) => {
  let sum = 0;

  while (num != 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
};

var differenceOfSumBest = (nums) => {
  let eSum = nums.reduce((acc, val) => acc + val, 0);
  let dSum = nums.reduce((acc, val) => acc + getDigitSum(val), 0);
  return Math.abs(eSum - dSum);
};

console.log(differenceOfSum([1, 15, 6, 3]));
