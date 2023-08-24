## Explanation:

We can use a sliding window technique based off the idea of buying low and selling high

## Algorithm:

```
low = prices[0]

high = prices[0]

maxProfit = -999

for price in prices:
    low = Math.min(price, low)
    maxProfit = Math.max(maxProfit, price - low)

return low
```
