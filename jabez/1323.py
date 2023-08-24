# You are given a positive integer num consisting only of digits 6 and 9.

# Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
def solution(num):
    strNum = str(num)
    length = len(strNum)
    max = num
    for i in range(0, length):
        tempStrNum = strNum
        if strNum[i] == '9':
            tempStrNum[i] = '6'
        else:
            tempStrNum[i] = '9'
        intNum = int(tempStrNum)
        max = max(max, intNum)
    return max


    
