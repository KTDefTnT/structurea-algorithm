var restoreIpAddresses = function(s) {
  let result = [];
  let path = []; // 合法的串

  if (s.length > 12) return result;

  // 1.确定递归函数的入参和返回值： startIndex: 其实位置，pointNum， 添加逗点的个数
  function backTracking(startIndex, pointNum) {
      // 2. 确定递归终止条件, ip地址需要三个点： 有了三个点之后不再继续截取
      if (pointNum === 3) {
          // 如果最后一段也是合法的ip段， 则可塞入结果集
          if (isValid(s, startIndex, s.length - 1)) {
              result.push(path.join('.') + `.${s.substr(startIndex, s.length - 1)}`);
          }
          return;
      }

      // 3. 确定单层处理逻辑： 遍历整个数组，一个个截取 前面的均合法 则向后面继续截取
      // 不合法则进行剪枝  不处理深度，直接往后走
      for (let i = startIndex; i < s.length; i++) {
          console.log(s, startIndex, i, isValid(s, startIndex, i));
          // 处理当前节点
          if (isValid(s, startIndex, i)) {
              // console.log(s.substr(startIndex, i));
              path.push(s.substr(startIndex, i));
              pointNum++;
              // 需要 + 2,i后面添加了一个‘.’
              backTracking(i + 2, pointNum);
              pointNum--;
              path.pop();
          } else {
              break;
          }
      }
  }
  
  backTracking(0, 0);

  return result;
};

// 判断字符串[start, end]是否为合法有效的ip串
function isValid(s, start, end) {
  if (start > end) return false;
  // 1.先导为0的非0字符不合法
  if (s[start] === '0' && start !== end) return false;

  // 2.大于255的不合法,和含有非法字符串的不合法
  let num = 0;
  for (let i = start; i <= end; i++) {
      if (s[i] > '9' || s[i] < 0) return false;
      num = num * 10 + (s[i] - '0');
      console.log(num);
      if (num > 255) return false;        
  }

  return true;
}

restoreIpAddresses('25525511');