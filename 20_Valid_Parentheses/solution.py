class Solution:
    def isValid(self, s: str) -> bool:
        stack = list()

        for char in s:
            if char in ("(", "[", "{"):
                stack.append(char)
            else:
                openBracket = ""
                if len(stack) != 0:
                    openBracket = stack.pop()
                if char == ")" and openBracket != "(":
                    return False
                if char == "]" and openBracket != "[":
                    return False
                if char == "}" and openBracket != "{":
                    return False

        return len(stack) == 0
