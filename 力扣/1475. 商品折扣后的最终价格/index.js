/**
 * 给你一个数组 prices ，其中 prices[i] 是商店里第 i 件商品的价格。
* 商店里正在进行促销活动，如果你要买第 i 件商品，那么你可以得到与 prices[j] 相等的折扣，
* 其中 j 是满足 j > i 且 prices[j] <= prices[i] 的 最小下标 ，如果没有满足条件的 j ，你将没有任何折扣。
* 请你返回一个数组，数组中第 i 个元素是折扣后你购买商品 i 最终需要支付的价格。
 */

/**
 * @param {number[]} prices
 * @return {number[]}
 */
 var finalPrices = function(prices) {
  let result = [];
  // 双循环 时间复杂度 O(n²)
  for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
          // 判断i后是否存在符合要求的折扣
          if (prices[j] <= prices[i]) {
              result.push(prices[i] - prices[j]);
              break;
          }
      }

      // 若j遍历完后，当前的数组长度等于 i  则表示没有符合要求的折扣 需要将当前的价格push
      if (i === result.length) {
        result.push(prices[i]);
      }
  }

  return result;
};


