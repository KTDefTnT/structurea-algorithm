var combine = function(n, k) {
  let result = [];
  let path = [];
  let depth = 1;
  backTracking(1, n, k);

  // 1、确定参数和返回值：  
// 参数 startIndex初始位置，整个整数，k个树， 上一次的组合的数据, 全部组合  无返回值
function backTracking(startIndex, n, k) {
  // 确定终止条件, 已经获取了k个数
  if (path.length === k) {
      // 将当前复合条件的元素压入结果集
      result.push([...path]);
      return;
  }

  // 单层逻辑处理： 层级处理
  for (let i = startIndex; i <= n; i++) {
      console.log(depth, '----', i, path, result);
      //处理节点
      path.push(i);
      depth++;
      // 递归处理
      backTracking(i + 1, n, k);
      // 回溯，将当前元素回退，继续处理下一个
      path.pop();
  }
}

  console.log('xx', result);
  return result;
};



combine(5,3);