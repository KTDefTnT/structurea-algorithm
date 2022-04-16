/**
 * 思路：
 * 1、先排序
 * 2、找出数组中的最大值和不等于0的最小值
 * 3、在寻找最小值时，如果判断出有重复数字则返回
 * 4、最大值和最小值插值如果大于4 则返回false，若小于4 则表示可以成顺，不管有几个大小王 可直接替代
 * @return {boolean}
 */
 var isStraight = function(nums) {
  quickSort(nums, 0, nums.length - 1);
  let maxValue = nums[nums.length - 1];
  let minValue;
  let isMin = true;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) continue;
      if (nums[i] !== 0) {
          if (isMin) {
              minValue = nums[i];
              isMin = false;
          }
          if (nums[i] === nums[i + 1]) return false;
      }
  }

  return (maxValue - minValue) <= nums.length -1;
};

var quickSort = function (nums, start, end) {
  // 递归终止条件
  if(end - start < 1) return;

  // target值已被保存 首位可看做为空位 用于操作
  let target = nums[start];
  let left = start;
  let right = end;

  while (left < right) {
      if (left < right && nums[right] >= target) {
          right--;
      }

      // 将当前的right值 置于left处，再次进行比较
      nums[left] = nums[right];
      
      // 当前左指针值<即上次右指针值>
      if (left < right && nums[left] < target) {
          left++;
      }

      // 右指针已比较完成，或者仍然比target大  需要将当前的 左指针值赋值给右指针
      nums[right] = nums[left];
  }

  nums[left] = target;
  quickSort(nums, start, left - 1);
  quickSort(nums, left + 1, end);
  return nums;
}
