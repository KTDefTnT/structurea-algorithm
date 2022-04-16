/**
 * 利用归并的思想实现的排序方法。
 * 
 * 该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。
 * （分治法将问题分成一些小的问题然后递归求解，而治的阶段则将分的阶段得到的各答案"修补"在一起，即分而治之)。
 * 将已有序的子序列合并，得到完全有序的序列
 * 即先使每个子序列有序，再使子序列段间有序
 * 若将两个有序表合并成一个有序表，称为二路归并
 * 
 * 先将大数组分解 分到只有一个元素或2个元素，然后开始组成合并排序
 * 
 * 时间复杂度： O(nlogn)
 * 空间复杂度：
 */

function mergeSort(arr) {
  // 递归终止条件
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  const front = arr.slice(0, mid);
  const end = arr.slice(mid);

  // 合并
  return merge(mergeSort(front), mergeSort(end));
}

// 合并两个有序数组
function merge(front, end) {
  const temp = [];
  while (front.length && end.length) {
    if (front[0] > end[0]) {
      temp.push(end.shift());
    } else {
      temp.push(front.shift());
    }
  }

  while (front.length) {
    temp.push(front.shift());
  }

  while (end.length) {
    temp.push(end.shift());
  }
  return temp;
}

let arr = [212,324,34,45,231,5654,325,786];
console.log(mergeSort(arr));