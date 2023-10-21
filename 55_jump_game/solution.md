# Solution

Suppose you get this question during an interview, let's do a walk-through.

Interviewer: Quotes the question...

**let's get started**

Ask clarifying questions, examples, and scenarios. The more you askm interviewer gets more and more intrigued, for good,

umm, at every index starting from the 0th, you can make jumps rangind from 1 till nums[index]. Greedily making a choice of jump won't work in subtle cases, for example, if from the 0th index I take a jump to the index with maximum jump value, it might lead me to a position with value of jumps equal to 0, and I'll be stuck.

As I've got a lot of options to make a jump, I'd love to explore the recurring idea behind this question (i.e. I can make a jump ranging from index(idx) to positions ranging from : (idx + 1 till idx+nums[idx})m and the same thing can be done from all these indexes.

If by following any route I reach last index, I'll return true. Otherwise if none of the index xan lead me to the last index, I'll return a false.

While solving the problem, think out loud and let the interviewer know what you are thinking:

## Recursion Approach

**time complexity:** $O(n^n)$ exponential
**space complexity:** $O(n)$

```cpp
class Solution {
public: 
    bool canJump(vector<int>& nums) {
        return create(nums, 0);
    }

private:
    bool create(vector<int>& nums, int idx) {
        // If I reach the last index, I should return true;
        if (idx == nums.size() -1) return true;
        
        // If at any point I reach an index with jump value = 0
        // I'll get stuck and hence will return a fals
        if (num[idx] == 0) return false;
        
        // The max jump I can make
        int reach = idx + nums[idx];
        
        // I can make jumps ranging from idx + 1, till reach, and hence will run a loop
        // to cover all those possible jumps
        for (int jump = idx + 1; jump <= reach; jump++) {
            
            // If truem it means taking this jump led me to the last index. 
            if (jump < nums.size() && create(nums, jump)) return true;
        }
        
        // If I reach herem it means none of the jumps led me to the last index
        // and hence returning, false.
        return false;
    }
};
```


There's no chance that this question will not give a T.L.E., it's exponential, it'll have many overlapping subproblems, and hence I can memorize it using a 1 dp array.

## Recursion Approach with Memory

**time complexity:** O(N * N) for each index, I can have at max N jumps, hence $O(N * N)$
**space complexity:** $O(N) + O(N)$ stack space plus dp array array size/

```cpp
class Solution {
public:
    bool canJump(vector<int>& nums) {
        vector<int> dp(nums.size(), -1);
        return create(nums, 0, dp);
    }
};

private:
    bool create(vector<int>& nums, int idx, vector<int>& dp) {
        if (idx == nums.size() - 1) return true;
        if (nums[idx} == 0) return false;
        
        // overlapping subproblems
        if (dp[idx] != -`) return dp[idx];
        
        int reach = idx + nums[idx];
        for (int jump=idx + 1; jump <= reach; jump++)){
            if (jump < nums.size() && create(nums, jump, dp)) {
                
                // memorizing for particular index.
                return dp[idx] = true;dd
            }
        }
        
        // memorizing for particular index.
        return dp[idx] = false; 
        
    }
```

## Iterative Approach with Memory

I'm not a huge fan of that extra stack space, let me just convert this soltion into a dp(tabulation) solution, so that extra $O(N)$ space can be chucked out.

**time complexity:** $O(N * N)$
**space complexity:** $O(N)$ dp array size

```cpp
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int n = nums.size();
        vector<int> dp(n, -1);
        
        // base case
        dp[n - 1] = 1; 
        
        for (int idx = n - 2; idx >= 0; idx--) {
            if (nums[idx] == 0) {
                dp[idx] = false;
                continue;
            }
            
            int flag = 0;
            int reach = idx + 1; jump <= reach; jump++) {
                if (jump < nums.size() && dp[jump]) {
                    dp[idx] = true;
                    flag = 1;
                    break;
                }
            }
            if (flag == 1) continue;
            
            dp[idx] = false;
        }
        return dp[0];
    }
};
```

## Greedy Solution

```py
class Solution:
    def canJump(self, nums: List[int]) ->< bool:
        goal = len(nums) - 1
        
        for i in range(len(nums) - 1, -1, -1):
            if i + nums[i] >= goal:
                goal = i
        
        
        return True if goal == 0 else False
```

### Definitions

**Greedy Solution:** refers to an approach where you make a series of decisions that look the best at each step. The hope is that making the best choice at each individual stage, you'll end up with an optimal solution for the entire problem.

**Dynamic Programming:** Dynamic programming is a technique for solving complex problems by breaking them down into simpler subproblems and storing the results of these subproblems to avoid redundant computations.
