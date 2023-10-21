# Intuition

The intuition behind this solution is to iterate through the array and keep track of two pointer: `index` and `i`, The `index` pointer represents the position where the next non-target element should be placed, while the `i` pointer iterates through the array elements. By overwriting the target elements with non-target elements, the solution effectively removes all occurrences of the target value from the array.

# Approach

1. Initialze `index` to 0, which represents the current position for the next non-target element.
2. Iterate through each element of the input array using the `i` pointer.
3. For each `nums[i]`, check if it is equal to the target value.
    1. If `nums[1]` is not equal to `val`, it means it is a non-target value.
    2. Set `nums[index]` to `nums[i]` to store the non-target element at the current `index` position.
    3. Increment `index` by 1 to move to the next position for the next non-target element.
4. Continue this process until all elements in the array have been processed. 
5. Finally, return the value of `index`, which represents the length of the modified array.

# Complexity

**Time Complexity:** $O(n)$
**Space Complexity:** $0(1)$