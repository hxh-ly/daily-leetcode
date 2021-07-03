/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

var maxProfit = function (prices, fee) {
  //买入回本值
  let buy = prices[0] + fee

  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    //选择入场时机
    if (prices[i] + fee < buy) {
      buy = prices[i] + fee
    } else if (prices[i] > buy) {
      //卖出一支股票时，就立即获得以相同价格并且免去手续费买入一支股票的权利
      sum += prices[i] - buy
      buy = prices[i]
    }

  }
  return sum;
};