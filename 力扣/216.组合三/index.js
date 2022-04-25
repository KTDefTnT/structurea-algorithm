var combinationSum3 = function(k, n) {
  // 1、确定函数参数和返回值   参数：个数k, 每一层的起始位置startIndex   无返回值
  function backTracking (startIndex, sum) {
      // 2、确定终止条件
      if (path.length === k) {
          if (sum === n) result.push([...path]);
          return;
      }

      // 3、确定单层循环的逻辑： 遍历当前层，循环匹配值
      for (let i = startIndex; i <= 9; i++) {
          // 将当前值放入path中， 总和加1
          path.push(i);
          sum += i;
          // 继续往下遍历
          backTracking(i + 1, sum);
          // 回溯
          path.pop();
          sum -= i;
      }
  }
  let result = []; // 保存所有结果集
  let path = []; // 单层结果集

  backTracking(1, 0);

  return result;
};