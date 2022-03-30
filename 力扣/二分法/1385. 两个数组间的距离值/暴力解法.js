/**
 * 
给你两个整数数组 arr1 ， arr2 和一个整数 d ，请你返回两个数组之间的 距离值 。

「距离值」 定义为符合此距离要求的元素数目：对于元素 arr1[i] ，
  不存在任何元素 arr2[j] 满足 |arr1[i]-arr2[j]| <= d 。
 */

var findTheDistanceValue = function (arr1, arr2, d) {
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // 如果存在不满足的条件的arr2[j] 直接break 退出j循环
      if (Math.abs(arr1[i] - arr2[j]) <= d) break;
      if (j === arr2.length - 1) result++;
    }
  }

  console.log(result);
  return result;
}
let arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2; // 2
// let arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3; // 2
// let arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6; // 1
// findTheDistanceValue([4,5,8], [10,9,1,8], 2);
findTheDistanceValue(arr1, arr2, d);
// findTheDistanceValue([2,1,100,3], [-5,-2,10,-3,7], 2);