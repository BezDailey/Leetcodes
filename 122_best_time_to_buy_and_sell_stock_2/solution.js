var solution = function (prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] < prices[i]) {
            profit += prices[i] - prices[i - 1];
        }
    }

    return profit;
}

solution([7, 1, 5, 3, 6, 4]);

solution([1, 2, 3, 4, 5]);
