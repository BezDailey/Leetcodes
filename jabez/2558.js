/*
 * 2558. Take Gifts From the Richest Pile
 *
 * You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:
 *
 * Choose the pile with the maximum number of gifts.
 * If there is more than one pile with the maximum number of gifts, choose any.
 * Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts.
 * Return the number of gifts remaining after k seconds.
 */

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */

var pickGifts = function (gifts, k) {
  while(k-->0){
    let max=Math.max(...gifts);
    gifts[gifts.lastIndexOf(max)] = Math.floor(Math.sqrt(max));
  }
  return gifts.reduce((a,b) => a + b, 0);
};

console.log(pickGifts([25,64,9,4,100], 4));
