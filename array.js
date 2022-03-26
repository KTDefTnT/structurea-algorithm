// var search = function(nums, target) {
//   // 最大值和最小值
//   let splitIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] > nums[i + 1]) {
//           // 最小值的位置
//           splitIndex = i + 1;
//           break;
//       }
//   }

//   // 左边大区
//   // 获取完毕当前target所在的范围后，使用二分查找
//   let leftIndex = binary_search(nums, target, 0, splitIndex === 0 ? 0 : splitIndex - 1);
//   if (leftIndex !== -1) return leftIndex;

//   // 判断当前的值在左边还是右边
//   // 左右两边同时使用二分法处理
//   let rightIndex = binary_search(nums, target, splitIndex, nums.length - 1);
//   return rightIndex !== -1 ? rightIndex : -1;
// };

// function binary_search(nums, target, left, right) {
//   while(left <= right) {
//       let middle = left + Math.floor((right - left) / 2);
//       if (nums[middle] === target) {
//           return middle;
//       } else if (nums[middle] > target) {
//           //  中间值比目标值还大  需要将右侧向左移 即往小区间找
//           right = middle - 1;
//       } else {
//           left = middle + 1;
//       }
//   }

//   return -1;
// }

// console.log(search([1,2,3], 2));


/**
 * @param {number} n
 * @return {number}
 */
var guess = function (num, pick) {
  if (num === pick) return 0;
  if (num > pick) return -1;
  return 1;
}

 var guessNumber = function(n, pick) {
  let left = 0;
  let right = n ;
  while (left < right) {
      let middle = left + Math.floor((right - left) >> 1);
      if (guess(middle, pick) === 0) {
          return middle;
      } else if (guess(middle, pick) > 0) {
          left = middle + 1;
      } else {
          right = middle;
      }
  }

  return left;
};

guessNumber(10, 7);