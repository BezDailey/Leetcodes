# Intuition

The intuition is to use two pointers, `i` and `j`, to iterate throuigh the array. The variable `j` is used to keep track of the current index where a unique element should be placed. The initial value of `j` is 1 since the first element in the array is always unique and doesn't need to be changed.

## Explanation: 

The code starts iterating from `i = 1` because we need to compare each element with its previous element to check for duplicates.
 
The main logic is inside the `for` loop:

1. If the current element `nums[i]` is not equal to the previous element `nums[i - 1]`, it means we have encountered a new unique element.
2. In that case, we update `nums[j]` with the value of the unique element at `nums[i]`, and then increment `j` by 1 to mark the next position for a new unique element.
3. By doing this, we effectively overwrite any duplicates in the array and only keep the unique elements.

Once the loop finishes, the value of `j` repesents the length of the resulting array with duplicates removed.

Finally, we return `j` as the desired result.

