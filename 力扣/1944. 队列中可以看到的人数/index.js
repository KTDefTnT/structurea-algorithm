/**
 * 
 * 有 n 个人排成一个队列，从左到右 编号为 0 到 n - 1 。给你以一个整数数组 heights ，每个整数 互不相同，heights[i] 表示第 i 个人的高度。
 * 一个人能 看到 他右边另一个人的条件是这两人之间的所有人都比他们两人 矮 。
 * 更正式的，第 i 个人能看到第 j 个人的条件是 i < j 且 min(heights[i], heights[j]) > max(heights[i+1], heights[i+2], ..., heights[j-1]) 。
 * 
 * 单调栈： 保存一个递增或者递减的顺序栈，如果发现非法的则剔除
 * 思路： 11 8 6 
 *    1. 从后倒数第一个开始, 判断当前栈是否为空，栈顶元素若比当前元素小 
 *         则将栈顶元素弹出，当前元素的可视人员+1；遍历查看是否依然存在比当前元素小的栈元素
 *    2. 如果栈不为空，则表示还可以看见站内的人员  可视人员 + 1
 *    3. 将当前元素压入栈中
 */

var canSeePersonsCount = function(heights) {
  let stack = [];
  let result = new Array(heights.length).fill(1);
  for (let i = heights.length - 1; i >= 0; i++) {
    // 判断当前栈顶元素是否比当前元素小，
    // ! 如果栈顶元素小于当前元素 则说明后面的人这个会被前面的人遮挡 需要弹出栈顶
    // 循环遍历查找，将被遮挡的人全部剔除
    while (stack.length && stack[stack.length - 1] < heights[i]) {
      // 将栈顶比当前元素小的元素弹出，会被前者遮挡  
      // 删掉这些比他低的人（在后续的遍历里，这些人会被这个人遮住）
      stack.pop();
      // 当前元素可以看到比自己矮的元素
      result[i]++;
    }

    // ! 若栈内还有元素，则说明为最高人 当前元素可以看到栈顶元素
    result[i] += !stack.length;
    stack.push(heights[i]);
  }

  return result;
};
let input = [10,6,8,5,11,9];
canSeePersonsCount(input);