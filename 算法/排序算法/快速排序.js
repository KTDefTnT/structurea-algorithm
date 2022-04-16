/**
 * 分治思想！！！！分而治之，将大问题转换为小问题，逐个处理
 * 
 * 快速排序： 通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，
 * 再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列
 * 
 * 实现步骤：
 * 1、选择一个基准元素target（一般选择第一个数）
 * 2、将比target小的元素移动到数组左边，比target大的元素移动到数组右边
 * 3、分别对target左侧和右侧的元素进行快速排序
 * 
 * 时间复杂度： O(nlogn)
 * 空间复杂度： O(logn)
 */

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let target = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < target) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([target], quickSort(right));
}

let arr = [212,324,34,45,231,5654,325,786];
console.log(quickSort(arr));