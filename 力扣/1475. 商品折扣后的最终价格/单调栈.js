/**
 * @param {number[]} prices
 * @return {number[]}
 */
/**
 * 题目意思就是对于数组中的每一个元素，找出它之后第一个小于等于它的元素，并求出它俩之差
 * 思路：单调栈 - 单调递增栈
 *    1、判断当前栈是否为空， 
 *        若不为空  判断栈顶元素是否大于当前元素，若大于 则取差值 index = index - i
 *        继续迭代，弹出栈顶元素 判断最新栈顶元素是否大于当前元素...
 *    2、迭代完成后，当前元素为除去栈中元素后的最大元素，压入栈中 等待下一个更小元素
 *    3、若是迭代完成后，栈中还有元素，则说明后面没有元素比它更小，直接获取自身的值即可        
 */
 var finalPrices = function(prices) {
  let stack = [];
  let result = [];

  for (let i = 0; i < prices.length; i++) {
    // 找右边的最小值，找到后则取两者的差值进行保存 stack保存的是prices的下标
    while(stack.length && prices[stack[stack.length - 1]] > prices[i]) {
      let index = stack.pop();
      result[index] = prices[index] - prices[i]
    }

    stack.push(i);
  }

  // 若后续没有比自己小的 则取当前值
  while(stack.length) {
    let top = stack.pop();
    result[top] = prices[top];
  }

  return result;
 }