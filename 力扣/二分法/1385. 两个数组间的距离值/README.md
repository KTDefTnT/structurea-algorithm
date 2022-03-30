# 暴力查找
## 解题思路
　　双层循环，对比arr1与arr2中的每一个值 判断是否符合条件

时间复杂度: O(m*n)
空间复杂度： O(1)

## 代码
```js
var findTheDistanceValue = function (arr1, arr2, d) {
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // 如果存在不满足的条件的arr2[j] 直接break 退出j循环
      if (Math.abs(arr1[i] - arr2[j]) <= d) break;
      if (j === arr2.length - 1) result++;
    }
  }

  return result;
}
```

# 二分查找法
## 解题思路
　　思路： 对于元素 arr1[i] ，不存在任何元素 arr2[j] 满足 |arr1[i]-arr2[j]| <= d。即在|arr1[i] - arr[j]| > d

　　可转化为 在arr2中寻找与arr[i]相邻的两个元素，如果比arr[i]大的最小值的差值大于d，且比arr[i]小的最大值差值也大于d。即整个arr2满足|arr1[i]-arr2[j]| > d 
　　转化为二分查找，找当前arr2[i]在arr2的位置index，比较arr1[i]/arr2[index]/arr2[index - 1]即可


举例:
arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
将arr2排序： [1,8,9,10], 以arr1[0]为例：在arr2中找到 【4】 在arr2的位置， 即index = 1, 其中： 8 - 1 > 2, 4 - 1 > 2, 这两个值满足条件 即其他值都满足条件

> 边界条件： 找到的值index = 0, 或者index = arr2.length + 1， 需要谨慎处理

时间复杂度： O((n+m)logm -> arr2快排 nlogn,循环mlogn
空间复杂度：O(1)

## 代码
```javascript
var findTheDistanceValue = function (arr1, arr2, d) {
  arr2.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    // 在第二个数组中找当前值的位置
    // 如果当前值与前一位 后一位的差值都大于 d，则arr2整个数据都满足条件
    let pivot = binarySearch(arr2, arr1[i]);

    // 如果当前值可以arr2中找到则不满足条件
    if (arr1[i] === arr2[pivot]) continue;
    let isOk = true;

    // 边界条件 pivot === arr.length + 1, pivot = 0
    if (pivot < arr2.length) {
      isOk = arr2[pivot] - arr1[i] > d;
      if (!isOk) continue;
    }

    // 若pivot = arr2.length + 1  即只需要判断arr[i] - arr2[arr2.length - 1]满足条件即可
    if (pivot - 1 >= 0 && pivot - 1 <= arr2.length) {
      isOk = arr1[i] - arr2[pivot - 1] > d;
    }

    result += isOk ? 1 : 0;
  }

  return result;
};

var binarySearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = left + Math.floor((right - left) >> 1);
    if (nums[middle] === target) return middle;
    if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return left;
};
```
