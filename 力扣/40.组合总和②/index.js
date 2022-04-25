var combinationSum2 = function(candidates, target) {
  let used = []; // 去重数组-树枝上已被使用的
  let result = []; // 结果集
  let path = []; // 单层结果集

  // 将数组重新排列
  candidates = candidates.sort((a, b) => a - b);

  // 1.确定递归函数的参数： startIndex开始位置，used： 已使用数组，sum： 和
  function backTracking(startIndex, used, sum) {
      // 2.确定递归终止条件
      if (sum === target) {
          result.push([...path]);
          return;
      }

      // 3.确定单层循环逻辑
      for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
          // 判断同一树层上是否已使用过; 两个值相等，且 used为false
          if (candidates[i - 1] === candidates[i] && !used[i - 1]) continue;
          // 处理节点
          path.push(candidates[i]);
          sum += candidates[i];
          used[i] = true;
          // 深度遍历
          backTracking(i + 1, used, sum);
          // 回溯
          path.pop();
          sum -= candidates[i];
          used[i] = false;
      }
  }

  backTracking(0, [], 0);

  console.log('result', result);
  return result;
};

combinationSum2([10,1,2,7,6,1,5], 8);