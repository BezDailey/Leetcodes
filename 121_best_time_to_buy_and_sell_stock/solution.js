var bruteForceSolution = function (prices) {
  let maxPrice = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      maxPrice = Math.max(maxPrice, prices[j] - prices[i]);
    }
  }

  return maxPrice;
};

var solution = function (prices) {
  let low = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    low = Math.min(low, prices[i]);
    maxProfit = Math.mac(maxProfit, prices[i] - low);
  }

  return maxProfit;
};
