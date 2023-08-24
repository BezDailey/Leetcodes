/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q
merged: a p b q c   d

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let returnValue = "";
    let minLength = Math.min(word1.length, word2.length);

    for (let i = 0; i < minLength; i++) {
        returnValue += word1.charAt(i) + word2.charAt(i);
    }

    if (minLength < word1.length) {
        returnValue += word1.slice(minLength, word1.length);
    } else if (minLength < word2.length) {
        returnValue += word2.slice(minLength, word2.length);
    }

    return returnValue;
};

console.log("Example 1: " + mergeAlternately("abc", "pqr"));
console.log("Example 2: " + mergeAlternately("ab", "pqrs"));
console.log("Example 3: " + mergeAlternately("abcd", "pq"));
/*
 * Case 1:
 * Word1.length == word2.length
 *  iterate through both at the same time
 *  add word1 char first then word2 char
 *
 * Case 2:
 * Word1.length > word2.length
 *  iterate through word1 and word2
 *  add word1 char first then word2 char
 *  add the rest of word1 cahr
 *
 * Case 3:
 * Word1.length < word2.length
 *  iterate through word1 and word2
 *  add word1 char first then word2 char
 *  add the rest of word1 char
 */

/* Solution from leetcode */
var mergeAlternately = function (word1, word2) {
    let result = '';
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) result += word1[i];
        if (i < word2.length) result += word2[i];
    }
    return result;
};
