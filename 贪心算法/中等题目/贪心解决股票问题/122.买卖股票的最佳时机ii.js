/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let sum = 0
  let store = 0
  for (let i = 1; i < prices.length; i++) {
    store = prices[i] - prices[i - 1]
    if (store > 0) {
      //在加入sum时 就说明i是要卖出的
      //1买1卖 适用
      //递增时 也适用
      sum += store
    }
  }
  return sum;
};