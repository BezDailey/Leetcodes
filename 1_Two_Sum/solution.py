class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {}

        for i in range(len(nums)):
            hashMap[nums[i]] = i
            goal = target - nums[i]
            if goal in hashMap:
                return [hashMap[goal], hashMap[nums[i]]]
