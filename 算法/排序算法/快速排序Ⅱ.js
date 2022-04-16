/**
 * 分治思想！！！！分而治之，将大问题转换为小问题，逐个处理
 * 
 * 快速排序： 通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，
 * 再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列
 * 
 * 时间复杂度： O(nlogn)
 * 空间复杂度： O(logn)
 */

function quickSort(arr) {
  return quickSortFn(arr, 0, arr.length - 1);
}

// 双指针 left right,以start为基准
/**
 * 
 * 1、将target值取 arrry[start]
 * 1、左边指针为left,右指针为right  分边从两端出发
 * 2、在l<r的条件下，找到右侧小于target的值array[r]，并将其赋值到array[l]
 * 3、在l<r的条件下，找到左侧大于target的值array[l]，并将其赋值到array[r]
 * 4、这样让l=r时，左侧的值全部小于target，右侧的值全部小于target，将target放到该位置
 * 5、递归处理 当前的target值实质默认为left<start>， target值已不需要排列。下一轮分别处理两边数组  [start, left - 1]、[left + 1, end]
 */

// left为target需要放置的位置，比较端实际为right 一次性比两个值
function quickSortFn(array, start, end) {
  // 递归终止条件 在同一个数组上操作，不需要返回值
  if (end - start < 1) {
    return;
  }

  let left = start;
  let right = end;
  let target = array[start];

  while (left < right) {
    // 判断left与right的大小
    if(left < right && array[right] >= target) {
      right--;
    }

    // 将下一个right放到left上，实现两次比较
    array[left] = array[right];

    if (left < right && array[left] < target) {
      left++;
    }
    // 将下一个比较推到后面的right上， 当前right值已比较完成 需要放置回right位置去比较
    array[right] = array[left];
  }

  array[left] = target;
  quickSortFn(array, start, left - 1);
  quickSortFn(array, left + 1, end);
  return array;
}


let arr = [212,324,34,45,231,5654,325,786];
console.log(quickSort(arr));