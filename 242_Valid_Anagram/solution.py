class Solution:
    def is_anagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        string_hashmap = {}

        for c in s:
            if c in string_hashmap:
                string_hashmap[c] = string_hashmap[c] + 1
            else:
                string_hashmap[c] = 1

        for c in t:
            if c in string_hashmap:
                if string_hashmap[c] > 0:
                    string_hashmap[c] = string_hashmap[c] - 1
                else:
                    return False
            else:
                return False

        return True
